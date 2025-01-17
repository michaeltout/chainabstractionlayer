import { JsonRpcProvider } from '@liquality/jsonrpc-provider'
import { addressToString } from '@liquality/utils'
import { normalizeTransactionObject, decodeRawTransaction } from '@liquality/verus-utils'
import { TxNotFoundError, BlockNotFoundError } from '@liquality/errors'
import { VerusNetwork } from '@liquality/verus-networks'
import { verus, Transaction, Block, ChainProvider, SendOptions, Address, BigNumber } from '@liquality/types'

import { flatten } from 'lodash'

interface ProviderOptions {
  // RPC URI
  uri: string
  // Authentication username
  username?: string
  // Authentication password
  password?: string
  // Verus network
  network: VerusNetwork
  // Number of block confirmations to target for fee. Defaul: 1
  feeBlockConfirmations?: number
  // Default fee per byte for transactions. Default: 3
  defaultFeePerByte?: number
}

export default class VerusRpcProvider extends JsonRpcProvider implements Partial<ChainProvider> {
  _feeBlockConfirmations: number
  _defaultFeePerByte: number
  _network: VerusNetwork
  _usedAddressCache: { [key: string]: boolean }

  constructor(options: ProviderOptions) {
    const { uri, username, password, network, feeBlockConfirmations = 1, defaultFeePerByte = 3 } = options
    super(uri, username, password)
    this._network = network
    this._feeBlockConfirmations = feeBlockConfirmations
    this._defaultFeePerByte = defaultFeePerByte
    this._usedAddressCache = {}
  }

  async decodeRawTransaction(rawTransaction: string): Promise<verus.Transaction> {
    return this.jsonrpc('decoderawtransaction', rawTransaction)
  }

  async getFeePerByte(numberOfBlocks = this._feeBlockConfirmations) {
    try {
      const fee = await this.jsonrpc('estimatefee', numberOfBlocks)

      if (fee && fee > 0) {
        if (fee < 0.0005) {
          return 25
        } else {
          // Get satoshis per byte (* 100000000 / 1000)
          return new BigNumber(fee).times(1e5).toNumber()
        }
      }

      throw new Error('Invalid estimated fee')
    } catch (e) {
      return this._defaultFeePerByte
    }
  }

  async getMinRelayFee() {
    const { relayfee } = await this.jsonrpc('getnetworkinfo')
    return (relayfee * 1e8) / 1000
  }

  async getBalance(_addresses: (string | Address)[]) {
    const addresses = _addresses.map(addressToString)
    const _utxos = await this.getUnspentTransactions(addresses)
    const utxos = flatten(_utxos)

    return utxos.reduce((acc, utxo) => acc.plus(utxo.value), new BigNumber(0))
  }

  async getUnspentTransactions(_addresses: (Address | string)[]): Promise<verus.UTXO[]> {
    const addresses = _addresses.map(addressToString)
    const addressUtxoResponse = await this.jsonrpc('getaddressutxos', { addresses, chainInfo: true })

    return addressUtxoResponse.utxos.map((utxo: { [key: string]: any }) => {
      return {
        txid: utxo.txid,
        vout: utxo.outputIndex,
        address: utxo.address,
        scriptPubKey: utxo.script,
        amount: new BigNumber(utxo.satoshis).dividedBy(1e8).toNumber(),
        value: utxo.satoshis,
        confirmations: addressUtxoResponse.height - utxo.height
      }
    })
  }

  async getAddressDeltas(_addresses: (Address | string)[]) {
    const addresses = _addresses.map(addressToString)
    const addressDeltas: verus.rpc.AddressDelta[] = await this.jsonrpc('getaddressdeltas', { addresses })
    const deltasFormatted: verus.AddressDeltas = {}

    for (const address of addresses) {
      deltasFormatted[address] = []
    }

    for (const delta of addressDeltas) {
      if (deltasFormatted[delta.address]) deltasFormatted[delta.address].push(delta)
      else deltasFormatted[delta.address] = [delta]
    }

    return deltasFormatted
  }

  async getReceivedByAddress(address: string): Promise<number> {
    return this.jsonrpc('getreceivedbyaddress', address)
  }

  async importAddresses(addresses: string[]) {
    const request = addresses.map((address) => ({ scriptPubKey: { address }, timestamp: 0 }))
    return this.jsonrpc('importmulti', request)
  }

  async getTransactionHex(transactionHash: string): Promise<string> {
    return this.jsonrpc('getrawtransaction', transactionHash)
  }

  async generateBlock(numberOfBlocks: number): Promise<void> {
    let lastLongest = -1
    let blocksPassed = 0

    return new Promise((resolve, reject) => {
      // Actually waits for new block(s)
      const infoInterval = setInterval(async () => {
        try {
          const { longestchain } = await this.jsonrpc('getinfo')

          if (lastLongest === -1) lastLongest = longestchain
          else if (longestchain > lastLongest) {
            blocksPassed += longestchain - lastLongest
            lastLongest = longestchain
          }

          if (blocksPassed >= numberOfBlocks) {
            clearInterval(infoInterval)
            resolve(null)
          }
        } catch (e) {
          clearInterval(infoInterval)
          reject(e)
        }
      }, 1000)
    })
  }

  async getBlockByHash(blockHash: string, includeTx = false): Promise<Block> {
    let data: verus.rpc.Block

    try {
      data = await this.jsonrpc('getblock', blockHash) // TODO: This doesn't fit the interface?: https://chainquery.com/bitcoin-cli/getblock
    } catch (e) {
      if (e.name === 'NodeError' && e.message.includes('Block not found')) {
        const { name, message, ...attrs } = e
        throw new BlockNotFoundError(`Block not found: ${blockHash}`, attrs)
      }

      throw e
    }

    const {
      hash,
      height: number,
      time: timestamp,
      difficulty,
      size,
      previousblockhash: parentHash,
      nonce,
      tx: transactionHashes
    } = data

    let transactions: any[] = transactionHashes
    // TODO: Why transactions need to be retrieved individually? getblock has verbose 2 https://chainquery.com/bitcoin-cli/getblock
    if (includeTx) {
      const txs = transactionHashes.map((hash) => this.getTransactionByHash(hash))
      transactions = await Promise.all(txs)
    }

    return {
      hash,
      number,
      timestamp,
      difficulty: parseFloat(new BigNumber(difficulty).toFixed()),
      size,
      parentHash,
      nonce,
      transactions
    }
  }

  async getBlockByNumber(blockNumber: number, includeTx = false) {
    let blockHash

    try {
      blockHash = await this.jsonrpc('getblockhash', blockNumber)
    } catch (e) {
      if (e.name === 'NodeError' && e.message.includes('Block height out of range')) {
        const { name, message, ...attrs } = e
        throw new BlockNotFoundError(`Block not found: ${blockNumber}`, attrs)
      }

      throw e
    }

    return this.getBlockByHash(blockHash, includeTx)
  }

  async getBlockHeight() {
    return this.jsonrpc('getblockcount')
  }

  async getTransactionByHash(transactionHash: string) {
    try {
      const tx = await this.getParsedTransactionByHash(transactionHash, true)
      return tx
    } catch (e) {
      if (e.name === 'NodeError' && e.message.includes('No such mempool transaction')) {
        const { name, message, ...attrs } = e
        throw new TxNotFoundError(`Transaction not found: ${transactionHash}`, attrs)
      }

      throw e
    }
  }

  async getTransactionFee(tx: verus.Transaction) {
    const isCoinbaseTx = tx.vin.find((vin) => vin.coinbase)
    if (isCoinbaseTx) return // Coinbase transactions do not have a fee

    const inputs = tx.vin.map((vin) => ({ txid: vin.txid, vout: vin.vout }))
    const inputTransactions = await Promise.all(inputs.map((input) => this.jsonrpc('getrawtransaction', input.txid, 1)))

    const inputValues = inputTransactions.map((inputTx, index) => {
      const vout = inputs[index].vout
      const output = inputTx.vout[vout]
      return output.value * 1e8
    })
    const inputValue = inputValues.reduce((a, b) => a.plus(new BigNumber(b)), new BigNumber(0))
    const outputValue = tx.vout.reduce(
      (a, b) => a.plus(new BigNumber(b.value).times(new BigNumber(1e8))),
      new BigNumber(0)
    )
    const feeValue = inputValue.minus(outputValue)
    return feeValue.toNumber()
  }

  async getParsedTransactionByHash(transactionHash: string, addFees = false): Promise<Transaction<verus.Transaction>> {
    const tx: verus.rpc.MinedTransaction = await this.jsonrpc('getrawtransaction', transactionHash, 1)
    return normalizeTransactionObject(
      tx,
      addFees ? await this.getTransactionFee(tx) : undefined,
      tx.confirmations > 0 ? await this.getBlockByHash(tx.blockhash) : undefined
    )
  }

  async getRawTransactionByHash(transactionHash: string) {
    const tx: string = await this.jsonrpc('getrawtransaction', transactionHash, 0)
    return tx
  }

  async sendRawTransaction(rawTransaction: string): Promise<string> {
    return this.jsonrpc('sendrawtransaction', rawTransaction)
  }

  async sendBatchTransaction(transactions: SendOptions[]) {
    const outputs: { [index: string]: number } = {}
    for (const tx of transactions) {
      outputs[addressToString(tx.to)] = new BigNumber(tx.value).dividedBy(1e8).toNumber()
    }
    const rawTxOutputs = await this.createRawTransaction([], outputs)
    const rawTxFunded = await this.fundRawTransaction(rawTxOutputs)
    const rawTxSigned = await this.signRawTransaction(rawTxFunded.hex)
    const fee = new BigNumber(rawTxFunded.fee).times(1e8).toNumber()
    await this.sendRawTransaction(rawTxSigned.hex)
    return normalizeTransactionObject(decodeRawTransaction(rawTxSigned.hex, this._network), fee)
  }

  async signRawTransaction(hexstring: string) {
    return this.jsonrpc('signrawtransaction', hexstring)
  }

  async createRawTransaction(transactions: [], outputs: { [index: string]: number }): Promise<string> {
    return this.jsonrpc('createrawtransaction', transactions, outputs)
  }

  async fundRawTransaction(hexstring: string): Promise<verus.rpc.FundRawResponse> {
    return this.jsonrpc('fundrawtransaction', hexstring)
  }
}
