/// <reference types="node" />
export declare const StandardError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const ProviderNotFoundError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const InvalidProviderError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const DuplicateProviderError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const NoProviderError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const UnsupportedMethodError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const UnimplementedMethodError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const InvalidProviderResponseError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const PendingTxError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const TxNotFoundError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const TxFailedError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const BlockNotFoundError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const InvalidDestinationAddressError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const WalletError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const NodeError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const InvalidSecretError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const InvalidAddressError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const InvalidExpirationError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
export declare const InsufficientBalanceError: {
    new (message: string, props?: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    new (props: any): {
        [key: string]: any;
        name: string;
        message: string;
        stack?: string;
    };
    captureStackTrace(targetObject: object, constructorOpt?: Function): void;
    prepareStackTrace?: (err: Error, stackTraces: NodeJS.CallSite[]) => any;
    stackTraceLimit: number;
};
