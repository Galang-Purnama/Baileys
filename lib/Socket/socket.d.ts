/// <reference types="node" />
import { Boom } from '@hapi/boom';
import { SocketConfig } from '../Types';
import { BinaryNode } from '../WABinary';
<<<<<<< HEAD
import { MobileSocketClient, WebSocketClient } from './Client';
=======
import { MobileSocket } from './mobile-socket';
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
/**
 * Connects to WA servers and performs:
 * - simple queries (no retry mechanism, wait for connection establishment)
 * - listen to messages and emit events
 * - query phone connection
 */
export declare const makeSocket: (config: SocketConfig) => {
    type: "md";
<<<<<<< HEAD
    ws: MobileSocketClient | WebSocketClient;
=======
    ws: MobileSocket;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    ev: import("../Types").BaileysEventEmitter & {
        process(handler: (events: Partial<import("../Types").BaileysEventMap>) => void | Promise<void>): () => void;
        buffer(): void;
        createBufferedFunction<A extends any[], T>(work: (...args: A) => Promise<T>): (...args: A) => Promise<T>;
        flush(force?: boolean | undefined): boolean;
        isBuffering(): boolean;
    };
    authState: {
        creds: import("../Types").AuthenticationCreds;
        keys: import("../Types").SignalKeyStoreWithTransaction;
    };
    signalRepository: import("../Types").SignalRepository;
    readonly user: import("../Types").Contact | undefined;
    generateMessageTag: () => string;
<<<<<<< HEAD
    query: (node: BinaryNode, timeoutMs?: number) => Promise<BinaryNode>;
=======
    query: (node: BinaryNode, timeoutMs?: number | undefined) => Promise<BinaryNode>;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    waitForMessage: <T_1>(msgId: string, timeoutMs?: number | undefined) => Promise<T_1>;
    waitForSocketOpen: () => Promise<void>;
    sendRawMessage: (data: Uint8Array | Buffer) => Promise<void>;
    sendNode: (frame: BinaryNode) => Promise<void>;
<<<<<<< HEAD
    logout: (msg?: string) => Promise<void>;
=======
    logout: (msg?: string | undefined) => Promise<void>;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    end: (error: Error | undefined) => void;
    onUnexpectedError: (err: Error | Boom, msg: string) => void;
    uploadPreKeys: (count?: number) => Promise<void>;
    uploadPreKeysToServerIfRequired: () => Promise<void>;
    /** Waits for the connection to WA to reach a state */
    waitForConnectionUpdate: (check: (u: Partial<import("../Types").ConnectionState>) => boolean | undefined, timeoutMs?: number | undefined) => Promise<void>;
};
<<<<<<< HEAD
export type Socket = ReturnType<typeof makeSocket>;
=======
export declare type Socket = ReturnType<typeof makeSocket>;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
