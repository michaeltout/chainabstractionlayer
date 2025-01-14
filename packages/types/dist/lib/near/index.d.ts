import { SendOptions } from '../chain';
export interface NearSendOptions extends SendOptions {
    actions?: any[];
}
export interface Tx {
    signer_id: string;
    public_key: string;
    nonce: number;
    receiver_id: string;
    actions: any[];
    signature: string;
    hash: string;
    status: ExecutionStatus;
    blockNumber?: number;
}
export interface NearInputBlockHeader {
    height: number;
    hash: string;
    timestamp: number;
    prev_hash: string;
    chunks_included: number;
}
export interface NearChunk {
    transactions: Tx[];
}
export interface NearBlockHeader {
    number: number;
    hash: string;
    timestamp: number;
    size: number;
    transactions: NormalizedTransaction[];
}
interface ExecutionError {
    error_message: string;
    error_type: string;
}
interface ExecutionStatus {
    SuccessValue?: string;
    SuccessReceiptId?: string;
    Failure?: ExecutionError;
}
export interface InputTransaction {
    transaction: Tx;
    blockNumber: number;
    blockHash: string;
    status: ExecutionStatus;
}
export interface NormalizedTransaction {
    confirmations: number;
    blockNumber: number;
    blockHash: string;
    hash: string;
    _raw: InputTransaction;
    value: number;
}
declare type NearSwapParams = {
    method: string;
    secretHash?: string;
    expiration?: number;
    recipient?: string;
    secret?: string;
};
export interface NearSwapTransaction extends NormalizedTransaction {
    sender: string;
    receiver: string;
    code: string;
    swap: NearSwapParams;
}
export declare type NearScraperSwap = {
    block_hash: string;
    block_timestamp: string;
    hash: string;
    action_index: number;
    signer_id: string;
    receiver_id: string;
    action_kind: string;
    args: {
        [key: string]: any;
    };
};
export {};
