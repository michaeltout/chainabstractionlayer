export default {
  estimatefee: [
    {
      params: [1],
      result: 0.0002
    },
    {
      params: [3],
      result: 0.0001
    },
    {
      params: [6],
      result: 0.00005
    }
  ],
  getblockhash: [
    {
      params: [630],
      result: '00000001439a3bdcfa858e112db41fda5b7419668e3c2575bf5fb23529d8625d'
    }
  ],
  getblock: [
    {
      params: ['00000001439a3bdcfa858e112db41fda5b7419668e3c2575bf5fb23529d8625d'],
      result: {
        hash: '00000001439a3bdcfa858e112db41fda5b7419668e3c2575bf5fb23529d8625d',
        validationtype: 'work',
        confirmations: 78429,
        size: 1700,
        height: 630,
        version: 65540,
        merkleroot: '43a1fff9b19c0e45f053841b28f3196bc2fb86e8324eebb02b1f83921f3c10fd',
        segid: -2,
        finalsaplingroot: '3e49b5f954aa9d3545bc6c37744661eea48d7c34e3000d82b7f0010c30f4c2fb',
        tx: ['43a1fff9b19c0e45f053841b28f3196bc2fb86e8324eebb02b1f83921f3c10fd'],
        time: 1636967067,
        nonce: '0000970dceda1554b2cee3cb4e5ae262843bac8554c81d0f39395aaf888d98d9',
        solution:
          '07000000000104000432d5a81ec70bb4de537356450950301a374e121202536a7ddcd1fa10c59f0061e6f39545cd1a5d5aa25d4f08e383c84a9405c34a5f4dee10990c21eb95d2e3a6ef9ea235635e328124ff3429db9f9e91b64e2dc63e01e9e5d531787fc719c3e0e632ac26bdbb4bbbab91ca48e70b7233a6290e3000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000487a3c000000000000000000000000',
        bits: '1d0432bb',
        difficulty: 60179880.07283803,
        chainwork: '00000000000000000000000000000000000000000000000000000012eb85056c',
        chainstake: '0000000000000000000000000000000000000000000000000000043590708261',
        anchor: '59d2cde5e65c1414c32ba54f0fe4bdb3d67618125286e6a191317917c812c6d7',
        blocktype: 'mined',
        valuePools: [
          {
            id: 'sprout',
            monitored: true,
            chainValue: 0.0,
            chainValueZat: 0,
            valueDelta: 0.0,
            valueDeltaZat: 0
          },
          {
            id: 'sapling',
            monitored: true,
            chainValue: 0.0,
            chainValueZat: 0,
            valueDelta: 0.0,
            valueDeltaZat: 0
          }
        ],
        previousblockhash: '3ed630f8cf29bfd69548694bb1d552e8954d281f42effd828af6e0307956d984',
        nextblockhash: 'c09334ba245bf8a7bea4b9378bf074c7eab7c971841b0640209093cfa1861f05',
        proofroot: {
          version: 1,
          type: 1,
          systemid: 'iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq',
          height: 630,
          stateroot: 'c1bd02acd8388806bd9680208f3c03666a6a181d2667ab2b0b51826a371586fc',
          blockhash: '00000001439a3bdcfa858e112db41fda5b7419668e3c2575bf5fb23529d8625d',
          power: '00000000000000000000043590708261000000000000000000000012eb85056c'
        }
      }
    },
    {
      params: ['0000000028358b367ceac42490922179c3221c75cd1fefab547001af536f10e5'],
      result: {
        hash: '0000000028358b367ceac42490922179c3221c75cd1fefab547001af536f10e5',
        validationtype: 'work',
        confirmations: 69067,
        size: 3103,
        height: 10000,
        version: 65540,
        merkleroot: '227a21ade690881fae14f1f2a5ed7cf91490334ac5fe973b1158f8c5c573004e',
        segid: -2,
        finalsaplingroot: '42bb59ffb2395ccc67413e044bbe8cf59ed86d8a0dd20bfe63c605aa45c24aaa',
        tx: [
          '57c0b10db1d4b78a93e3eff5753b39294e44b128f62d188ae8f2635cc8c64b36',
          '1e9cc91a1f83a27cb8bb2c82e32678bb1621743b302aaa46dd3856c23574e9dc',
          '1bba40a00c55a03a04e07e5b0555ce1c786c26cc98c7bdeed3a31035fb24263b',
          'cecb57b305cc96a42323639c3754ee792a468cd67b62dad017a771a84f6131cc'
        ],
        time: 1637548771,
        nonce: '000039c15db6290cf986410cf0890fc9ad3c04c207cde95202fa75f3eb323621',
        solution:
          '0700000000010400c5566ed127fcd57b8a13d764295125fce75df28adb9cadaef612533f6f7e0056a5eb0a3050e0318b491dd55da6c8e1f72164e6110c0670848fb32f0e6835ab54a6ef9ea235635e328124ff3429db9f9e91b64e2deb7405dd0252e3fbf3a5cc0210f0a7cb764e6d64da5a7cc09827c0ebf714d1db2800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000b434ed010000000000000000000000',
        bits: '1d010e70',
        difficulty: 239157478.9738849,
        chainwork: '00000000000000000000000000000000000000000000000000001f562c009673',
        chainstake: '00000000000000000000000000000000000000000000000041738124e7c2a5cf',
        anchor: '59d2cde5e65c1414c32ba54f0fe4bdb3d67618125286e6a191317917c812c6d7',
        blocktype: 'mined',
        valuePools: [
          {
            id: 'sprout',
            monitored: true,
            chainValue: 0.0,
            chainValueZat: 0,
            valueDelta: 0.0,
            valueDeltaZat: 0
          },
          {
            id: 'sapling',
            monitored: true,
            chainValue: 1441.41434466,
            chainValueZat: 144141434466,
            valueDelta: 0.0,
            valueDeltaZat: 0
          }
        ],
        previousblockhash: '000000003e4256c094565c7ee1b414969d055a0e46d8336144d299d61249486a',
        nextblockhash: '000000012b32891383d402e8228f2bc621f23e2e80f47cb10c646d0ae02b4882',
        proofroot: {
          version: 1,
          type: 1,
          systemid: 'iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq',
          height: 10000,
          stateroot: '9e80e69be174d9ee21f044033f3f67c5ee8a71573aa6d1c2497105e8e9cb850b',
          blockhash: '0000000028358b367ceac42490922179c3221c75cd1fefab547001af536f10e5',
          power: '000000000000000041738124e7c2a5cf000000000000000000001f562c009673'
        }
      }
    }
  ],
  getrawtransaction: [
    {
      params: ['43a1fff9b19c0e45f053841b28f3196bc2fb86e8324eebb02b1f83921f3c10fd', 0],
      result:
        '0400008085202f89010000000000000000000000000000000000000000000000000000000000000000ffffffff0402760200ffffffff02de8baa5e00000000232102c9ca37dac14c819a99ce4a71533ab8d3d5e37643ede9c4da0981081a074f75dfac0000000000000000551a040300010114a23f82866c21819f55a1668ba7b9932e6d326b1ecc37040314010114a23f82866c21819f55a1668ba7b9932e6d326b1e1c01a6ef9ea235635e328124ff3429db9f9e91b64e2d808e96aee46c01759b229261000000000000000000000000000000'
    },
    {
      params: ['43a1fff9b19c0e45f053841b28f3196bc2fb86e8324eebb02b1f83921f3c10fd', 1],
      result: {
        hex: '0400008085202f89010000000000000000000000000000000000000000000000000000000000000000ffffffff0402760200ffffffff02de8baa5e00000000232102c9ca37dac14c819a99ce4a71533ab8d3d5e37643ede9c4da0981081a074f75dfac0000000000000000551a040300010114a23f82866c21819f55a1668ba7b9932e6d326b1ecc37040314010114a23f82866c21819f55a1668ba7b9932e6d326b1e1c01a6ef9ea235635e328124ff3429db9f9e91b64e2d808e96aee46c01759b229261000000000000000000000000000000',
        txid: '43a1fff9b19c0e45f053841b28f3196bc2fb86e8324eebb02b1f83921f3c10fd',
        overwintered: true,
        version: 4,
        versiongroupid: '892f2085',
        locktime: 1636967067,
        expiryheight: 0,
        vin: [
          {
            coinbase: '02760200',
            sequence: 4294967295
          }
        ],
        vout: [
          {
            value: 15.8823523,
            valueSat: 1588235230,
            n: 0,
            scriptPubKey: {
              type: 'pubkey',
              spendableoutput: true,
              reqSigs: 1,
              addresses: ['RFoinkqD2QinMi25mUu5h7k3f4ETaBQWpo'],
              asm: '02c9ca37dac14c819a99ce4a71533ab8d3d5e37643ede9c4da0981081a074f75df OP_CHECKSIG',
              hex: '2102c9ca37dac14c819a99ce4a71533ab8d3d5e37643ede9c4da0981081a074f75dfac'
            },
            spentTxId: 'a078fd352957811cc3def6ba8c8ca29c949dec4222d23dda61dff6a62f71cd97',
            spentIndex: 48,
            spentHeight: 10446
          },
          {
            value: 0.0,
            valueSat: 0,
            n: 1,
            scriptPubKey: {
              type: 'cryptocondition',
              feepool: {
                version: 1,
                currencyvalues: {
                  iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq: 384.35287788
                }
              },
              spendableoutput: true,
              reqSigs: 1,
              addresses: ['RQ55dLQ7uGnLx8scXfkaFV6QS6qVBGyxAG'],
              asm: '040300010114a23f82866c21819f55a1668ba7b9932e6d326b1e OP_CHECKCRYPTOCONDITION 040314010114a23f82866c21819f55a1668ba7b9932e6d326b1e1c01a6ef9ea235635e328124ff3429db9f9e91b64e2d808e96aee46c01 OP_DROP',
              hex: '1a040300010114a23f82866c21819f55a1668ba7b9932e6d326b1ecc37040314010114a23f82866c21819f55a1668ba7b9932e6d326b1e1c01a6ef9ea235635e328124ff3429db9f9e91b64e2d808e96aee46c0175'
            }
          }
        ],
        vjoinsplit: [],
        valueBalance: 0.0,
        vShieldedSpend: [],
        vShieldedOutput: [],
        blockhash: '00000001439a3bdcfa858e112db41fda5b7419668e3c2575bf5fb23529d8625d',
        height: 630,
        confirmations: 78437,
        time: 1636967067,
        blocktime: 1636967067
      }
    },
    {
      params: ['57c0b10db1d4b78a93e3eff5753b39294e44b128f62d188ae8f2635cc8c64b36', 1],
      result: {
        hex: '0400008085202f89010000000000000000000000000000000000000000000000000000000000000000ffffffff0402102700ffffffff028cfbc14b0000000023210307f4ea08dcdf592a9020859b1745529f99ed58f34a895190f49a4be76ae11495ac0000000000000000541a040300010114a23f82866c21819f55a1668ba7b9932e6d326b1ecc36040314010114a23f82866c21819f55a1668ba7b9932e6d326b1e1b01a6ef9ea235635e328124ff3429db9f9e91b64e2d9996efc6040175e3029b61000000000000000000000000000000',
        txid: '57c0b10db1d4b78a93e3eff5753b39294e44b128f62d188ae8f2635cc8c64b36',
        overwintered: true,
        version: 4,
        versiongroupid: '892f2085',
        locktime: 1637548771,
        expiryheight: 0,
        vin: [
          {
            coinbase: '02102700',
            sequence: 4294967295
          }
        ],
        vout: [
          {
            value: 12.71004044,
            valueSat: 1271004044,
            n: 0,
            scriptPubKey: {
              type: 'pubkey',
              spendableoutput: true,
              reqSigs: 1,
              addresses: ['RAkY4FtZbbTJqbvU3xShB9Cg9wueNnDZoC'],
              asm: '0307f4ea08dcdf592a9020859b1745529f99ed58f34a895190f49a4be76ae11495 OP_CHECKSIG',
              hex: '210307f4ea08dcdf592a9020859b1745529f99ed58f34a895190f49a4be76ae11495ac'
            },
            spentTxId: '27624d5de6d1bbe04666d1500ad3ddb53c22473b7746119f590697096776c6e2',
            spentIndex: 12,
            spentHeight: 12831
          },
          {
            value: 0.0,
            valueSat: 0,
            n: 1,
            scriptPubKey: {
              type: 'cryptocondition',
              feepool: {
                version: 1,
                currencyvalues: {
                  iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq: 70.29400452
                }
              },
              spendableoutput: true,
              reqSigs: 1,
              addresses: ['RQ55dLQ7uGnLx8scXfkaFV6QS6qVBGyxAG'],
              asm: '040300010114a23f82866c21819f55a1668ba7b9932e6d326b1e OP_CHECKCRYPTOCONDITION 040314010114a23f82866c21819f55a1668ba7b9932e6d326b1e1b01a6ef9ea235635e328124ff3429db9f9e91b64e2d9996efc60401 OP_DROP',
              hex: '1a040300010114a23f82866c21819f55a1668ba7b9932e6d326b1ecc36040314010114a23f82866c21819f55a1668ba7b9932e6d326b1e1b01a6ef9ea235635e328124ff3429db9f9e91b64e2d9996efc6040175'
            }
          }
        ],
        vjoinsplit: [],
        valueBalance: 0.0,
        vShieldedSpend: [],
        vShieldedOutput: [],
        blockhash: '0000000028358b367ceac42490922179c3221c75cd1fefab547001af536f10e5',
        height: 10000,
        confirmations: 69067,
        time: 1637548771,
        blocktime: 1637548771
      }
    }
  ],
  decoderawtransaction: [
    {
      params: [
        '0400008085202f89043b2624fb3510a3d3eebdc798cc266c781cce55055b7ee0043aa0550ca040ba1b00000000694c67010101012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d94063059418b71f3b2bfeb2c8177246f0449a61e4d143e0584c7276bb02250c61d50761a00b2e9b1452a176cbb1c8591823d92abe3b03370b98037d857ec3384a01ffffffffdce97435c25638dd46aa2a303b742116bb7826e3822cbbb87ca2831f1ac99c1e00000000694c67010101012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d9406cb0c4f636661e7a33cb52510b427178ea5e384eb006ab6b8ca23333f77302af3d8e3f60e01be27b03f580aee26b633b4e9c406c83afc28ac7da489652469f33ffffffff033196bc1da3875a4314eed4adf12637100fca93d620bb1c93a85e0fecc8c60702000000694c67010101012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60f40b8569f7d4c6ba5f31c4f13982a78c111bcca83ac429a99039eebbaf204acf42837cde4a8af2e002bbbdbcc86b5ce9d2d7dd63ca21561aa44cb5d3aeea10f5afcffffffff113376c34a8d11b3a45b4e91aee0c743d8818d624e759eaf5990997d6f95ddb200000000694c67010101012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60f405465b8760c99363158e336f9e28224ebb10b6c925b0e9bd9062728f05a847f831d95a234eb3d65a068a011da23d5f8c20446515e779d27c03308a7bbb8716b27ffffffff020000000000000000ef2704030001012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d9cc4cc304030301012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d94c9a0101a6ef9ea235635e328124ff3429db9f9e91b64e2d033196bc1da3875a4314eed4adf12637100fca93d620bb1c93a85e0fecc8c607010000000101c6d8a087e1429b3676913435fb21e42569005ebc02030e270000014120f9b5bdc2d0210f09037f6f8306d8b6230459873da79d4f683bb755da524dabc05a0e2e93881e7ebe9fb000a47dc47ce3854a5a41bce50ed3e6798accc9fa8820007500000000000000009c2704030001012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60fcc4c7004030601012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60f48018167460c2f56774ed27eeb8685f29f6cec0b090b00033196bc1da3875a4314eed4adf12637100fca93d620bb1c93a85e0fecc8c6070100000002000000000100000001000000007500000000232700000000000000000000000000'
      ],
      result: {
        txid: 'db0eda350af018e9e6162b7e456573459d7dbf092e6fc1dd37a0e18ee80c1a12',
        overwintered: true,
        version: 4,
        versiongroupid: '892f2085',
        locktime: 0,
        expiryheight: 10019,
        vin: [
          {
            txid: '1bba40a00c55a03a04e07e5b0555ce1c786c26cc98c7bdeed3a31035fb24263b',
            vout: 0,
            scriptSig: {
              asm: '010101012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d94063059418b71f3b2bfeb2c8177246f0449a61e4d143e0584c7276bb02250c61d50761a00b2e9b1452a176cbb1c8591823d92abe3b03370b98037d857ec3384a01',
              hex: '4c67010101012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d94063059418b71f3b2bfeb2c8177246f0449a61e4d143e0584c7276bb02250c61d50761a00b2e9b1452a176cbb1c8591823d92abe3b03370b98037d857ec3384a01'
            },
            value: 0.0,
            valueSat: 0,
            address: 'xWTu6V6Uj9jdzSHzocXj2T7kN5ngddRvHu',
            sequence: 4294967295
          },
          {
            txid: '1e9cc91a1f83a27cb8bb2c82e32678bb1621743b302aaa46dd3856c23574e9dc',
            vout: 0,
            scriptSig: {
              asm: '010101012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d9406cb0c4f636661e7a33cb52510b427178ea5e384eb006ab6b8ca23333f77302af3d8e3f60e01be27b03f580aee26b633b4e9c406c83afc28ac7da489652469f33',
              hex: '4c67010101012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d9406cb0c4f636661e7a33cb52510b427178ea5e384eb006ab6b8ca23333f77302af3d8e3f60e01be27b03f580aee26b633b4e9c406c83afc28ac7da489652469f33'
            },
            value: 0.0,
            valueSat: 0,
            address: 'xWTu6V6Uj9jdzSHzocXj2T7kN5ngddRvHu',
            sequence: 4294967295
          },
          {
            txid: '07c6c8ec0f5ea8931cbb20d693ca0f103726f1add4ee14435a87a31dbc963103',
            vout: 2,
            scriptSig: {
              asm: '010101012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60f40b8569f7d4c6ba5f31c4f13982a78c111bcca83ac429a99039eebbaf204acf42837cde4a8af2e002bbbdbcc86b5ce9d2d7dd63ca21561aa44cb5d3aeea10f5afc',
              hex: '4c67010101012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60f40b8569f7d4c6ba5f31c4f13982a78c111bcca83ac429a99039eebbaf204acf42837cde4a8af2e002bbbdbcc86b5ce9d2d7dd63ca21561aa44cb5d3aeea10f5afc'
            },
            value: 0.0,
            valueSat: 0,
            address: 'xQ72r4jxmD6nrgC42aDH9wGkAdXeubPmD8',
            sequence: 4294967295
          },
          {
            txid: 'b2dd956f7d999059af9e754e628d81d843c7e0ae914e5ba4b3118d4ac3763311',
            vout: 0,
            scriptSig: {
              asm: '010101012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60f405465b8760c99363158e336f9e28224ebb10b6c925b0e9bd9062728f05a847f831d95a234eb3d65a068a011da23d5f8c20446515e779d27c03308a7bbb8716b27',
              hex: '4c67010101012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60f405465b8760c99363158e336f9e28224ebb10b6c925b0e9bd9062728f05a847f831d95a234eb3d65a068a011da23d5f8c20446515e779d27c03308a7bbb8716b27'
            },
            value: 0.0,
            valueSat: 0,
            address: 'xLAxG7wtKFvyi4L1j6Qv3S9GEG8BysW9CG',
            sequence: 4294967295
          }
        ],
        vout: [
          {
            value: 0.0,
            valueZat: 0,
            valueSat: 0,
            n: 0,
            scriptPubKey: {
              type: 'cryptocondition',
              notaryevidence: {
                version: 1,
                type: 1,
                systemid: 'iJhCezBExJHvtyH3fGhNnt2NhU4Ztkf2yq',
                output: {
                  txid: '07c6c8ec0f5ea8931cbb20d693ca0f103726f1add4ee14435a87a31dbc963103',
                  voutnum: 1
                },
                confirmed: true,
                signatures: {
                  iMbvja8kNA7u8Q6DsgwBkJDBL3ZsiycXkd: {
                    version: 2,
                    blockheight: 9998,
                    signatures: [
                      '20f9b5bdc2d0210f09037f6f8306d8b6230459873da79d4f683bb755da524dabc05a0e2e93881e7ebe9fb000a47dc47ce3854a5a41bce50ed3e6798accc9fa8820'
                    ]
                  }
                },
                evidence: []
              },
              spendableoutput: true,
              reqSigs: 1,
              addresses: ['RQWMeecjGFF3ZAVeSimRbyG9iMDUHPY5Ny'],
              asm: '04030001012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d9 OP_CHECKCRYPTOCONDITION 04030301012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d94c9a0101a6ef9ea235635e328124ff3429db9f9e91b64e2d033196bc1da3875a4314eed4adf12637100fca93d620bb1c93a85e0fecc8c607010000000101c6d8a087e1429b3676913435fb21e42569005ebc02030e270000014120f9b5bdc2d0210f09037f6f8306d8b6230459873da79d4f683bb755da524dabc05a0e2e93881e7ebe9fb000a47dc47ce3854a5a41bce50ed3e6798accc9fa882000 OP_DROP',
              hex: '2704030001012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d9cc4cc304030301012103e1894e9d487125be5a8c6657a8ce01bc81ba7816d698dbfcfb0483754eb5a2d94c9a0101a6ef9ea235635e328124ff3429db9f9e91b64e2d033196bc1da3875a4314eed4adf12637100fca93d620bb1c93a85e0fecc8c607010000000101c6d8a087e1429b3676913435fb21e42569005ebc02030e270000014120f9b5bdc2d0210f09037f6f8306d8b6230459873da79d4f683bb755da524dabc05a0e2e93881e7ebe9fb000a47dc47ce3854a5a41bce50ed3e6798accc9fa88200075'
            }
          },
          {
            value: 0.0,
            valueZat: 0,
            valueSat: 0,
            n: 1,
            scriptPubKey: {
              type: 'cryptocondition',
              finalizenotarization: {
                finalizationtype: 'finalizenotarization',
                status: 'confirmed',
                evidenceinputs: [0, 1],
                evidenceoutputs: [0],
                currencyid: 'iCtawpxUiCc2sEupt7Z4u8SDAncGZpgSKm',
                output: {
                  txid: '07c6c8ec0f5ea8931cbb20d693ca0f103726f1add4ee14435a87a31dbc963103',
                  voutnum: 1
                }
              },
              spendableoutput: true,
              reqSigs: 1,
              addresses: ['RRbKYitLH9EhQCvCo4bPZqJx3TWxASadxE'],
              asm: '04030001012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60f OP_CHECKCRYPTOCONDITION 04030601012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60f48018167460c2f56774ed27eeb8685f29f6cec0b090b00033196bc1da3875a4314eed4adf12637100fca93d620bb1c93a85e0fecc8c607010000000200000000010000000100000000 OP_DROP',
              hex: '2704030001012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60fcc4c7004030601012102e3154f8122ff442fbca3ff8ff4d4fb2d9285fd9f4d841d58fb8d6b7acefed60f48018167460c2f56774ed27eeb8685f29f6cec0b090b00033196bc1da3875a4314eed4adf12637100fca93d620bb1c93a85e0fecc8c60701000000020000000001000000010000000075'
            },
            spentTxId: '7f1a0a977c2d4ea223102dd0d011ee1b2e38146a59a03d967486fb58f1c20c49',
            spentIndex: 3,
            spentHeight: 10007
          }
        ],
        vjoinsplit: [],
        valueBalance: 0.0,
        valueBalanceZat: 0,
        vShieldedSpend: [],
        vShieldedOutput: []
      }
    }
  ],
  signmessage: [
    {
      params: ['RBHnM7XTPAhrN9GrwrnQmaKmdb4avcmSgD', 'liquality'],
      result: {
        hash: '01a654e944f0bd2459b2e083268b3a723fbe7e82b220738a3e0249333e1d9ea2',
        signature: 'H0OtCFDTVsJWngkqNlnZOHUZ6w4pGg4f8si0sS5GsVQJGcN1Qg9oHNlf6GLawN9P+/Y5UbIod0p9GL/Vj7+kCtA='
      }
    }
  ],
  sendtoaddress: [
    {
      params: ['RN5gEqLUjEE8FmNrpkUTPY2nvUZCfBjNL3', 0.00001],
      result: 'cc34cced64892a234b961addb2aee650718f39db1eee4f9513fba970ff962e87'
    }
  ],
  gettransaction: [
    {
      params: ['cc34cced64892a234b961addb2aee650718f39db1eee4f9513fba970ff962e87', true],
      result: {
        amount: 0.0,
        fee: -0.0001,
        confirmations: 2,
        blockhash: 'f096727ca11b6de8263f21a2edcbfcd6c795f567640946df699f682a94b43281',
        blockindex: 1,
        blocktime: 1641831550,
        expiryheight: 79120,
        txid: 'cc34cced64892a234b961addb2aee650718f39db1eee4f9513fba970ff962e87',
        walletconflicts: [],
        time: 1641831541,
        timereceived: 1641831541,
        vjoinsplit: [],
        details: [
          {
            account: '',
            address: 'RN5gEqLUjEE8FmNrpkUTPY2nvUZCfBjNL3',
            category: 'send',
            amount: -0.00001,
            vout: 1,
            fee: -0.0001,
            size: 302
          },
          {
            account: '',
            address: 'RN5gEqLUjEE8FmNrpkUTPY2nvUZCfBjNL3',
            category: 'receive',
            amount: 0.00001,
            vout: 1,
            size: 302
          }
        ],
        hex: '0400008085202f8901337d034e4628cfdb68a675c92059bf70792f22d595696a2e378c3b651b2efde500000000694c670101010121039ed8f3cf38653c64ea261ee1db26ef700b6d823c17f9ebcf86ed30bbc7d2bfe6402abdf33142440a3ef670b8d753af686e0f329c715a138bcaaaa285ad7597c2cd6927b13a95160b272f308e193fc5b2d3fa798913addb4127fc06e6c423161294feffffff02d45a227700000000541a040300010114fa521b904404d199949b174792b8539ba519f8f8cc36040309010114fa521b904404d199949b174792b8539ba519f8f81b01387eac757d699e03c57c62256d823830d9a5ab919a90a58ed47275e8030000000000001976a9148c6c26a6aac1054825f331d525b0a8e781c1e77388acca340100103501000000000000000000000000'
      }
    }
  ],
  getreceivedbyaddress: [
    {
      params: ['RPJAoEKXhFkWSzBMNe3C8VwgsGmKF2rmcd'],
      result: 0
    },
    {
      params: ['RKrdSQgg4jcDfuKKwJpwJPLHMbqksg3kDe'],
      result: 379.9985
    },
    {
      params: ['RM2oQXnuy8C3cSoWJPfRXGWjGgCXfwdcsS'],
      result: 0
    }
  ],
  listunspent: [
    {
      params: [0, 9999999, ['RKrdSQgg4jcDfuKKwJpwJPLHMbqksg3kDe']],
      result: [
        {
          txid: '28e8bbd2547f4a71bc1ce09898a5f33f38c90e8b0a626f06086e768212f74424',
          vout: 2,
          generated: false,
          address: 'RKrdSQgg4jcDfuKKwJpwJPLHMbqksg3kDe',
          amount: 379.9985,
          interest: 0.0,
          scriptPubKey: '76a9147404277b703ce120135dc9c13afef1c2adf1a0df88ac',
          confirmations: 51897,
          spendable: true
        }
      ]
    }
  ],
  getnewaddress: [
    {
      params: [],
      result: 'RM2oQXnuy8C3cSoWJPfRXGWjGgCXfwdcsS'
    }
  ],
  getblockcount: [
    {
      params: [],
      result: 79112
    }
  ]
}
