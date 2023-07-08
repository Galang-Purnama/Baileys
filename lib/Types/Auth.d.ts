/// <reference types="node" />
import type { proto } from '../../WAProto';
import { RegistrationOptions } from '../Socket/registration';
import type { Contact } from './Contact';
import type { MinimalMessage } from './Message';
<<<<<<< HEAD
export type KeyPair = {
    public: Uint8Array;
    private: Uint8Array;
};
export type SignedKeyPair = {
=======
export declare type KeyPair = {
    public: Uint8Array;
    private: Uint8Array;
};
export declare type SignedKeyPair = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    keyPair: KeyPair;
    signature: Uint8Array;
    keyId: number;
    timestampS?: number;
};
<<<<<<< HEAD
export type ProtocolAddress = {
    name: string;
    deviceId: number;
};
export type SignalIdentity = {
    identifier: ProtocolAddress;
    identifierKey: Uint8Array;
};
export type LTHashState = {
=======
export declare type ProtocolAddress = {
    name: string;
    deviceId: number;
};
export declare type SignalIdentity = {
    identifier: ProtocolAddress;
    identifierKey: Uint8Array;
};
export declare type LTHashState = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    version: number;
    hash: Buffer;
    indexValueMap: {
        [indexMacBase64: string]: {
            valueMac: Uint8Array | Buffer;
        };
    };
};
<<<<<<< HEAD
export type SignalCreds = {
=======
export declare type SignalCreds = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    readonly signedIdentityKey: KeyPair;
    readonly signedPreKey: SignedKeyPair;
    readonly registrationId: number;
};
<<<<<<< HEAD
export type AccountSettings = {
=======
export declare type AccountSettings = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    /** unarchive chats when a new message is received */
    unarchiveChats: boolean;
    /** the default mode to start new conversations with */
    defaultDisappearingMode?: Pick<proto.IConversation, 'ephemeralExpiration' | 'ephemeralSettingTimestamp'>;
};
<<<<<<< HEAD
export type AuthenticationCreds = SignalCreds & {
=======
export declare type AuthenticationCreds = SignalCreds & {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    readonly noiseKey: KeyPair;
    readonly advSecretKey: string;
    me?: Contact;
    account?: proto.IADVSignedDeviceIdentity;
    signalIdentities?: SignalIdentity[];
    myAppStateKeyId?: string;
    firstUnuploadedPreKeyId: number;
    nextPreKeyId: number;
    lastAccountSyncTimestamp?: number;
    platform?: string;
    processedHistoryMessages: MinimalMessage[];
    /** number of times history & app state has been synced */
    accountSyncCounter: number;
    accountSettings: AccountSettings;
    deviceId: string;
    phoneId: string;
    identityId: Buffer;
    registered: boolean;
    backupToken: Buffer;
    registration: RegistrationOptions;
};
<<<<<<< HEAD
export type SignalDataTypeMap = {
=======
export declare type SignalDataTypeMap = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    'pre-key': KeyPair;
    'session': Uint8Array;
    'sender-key': Uint8Array;
    'sender-key-memory': {
        [jid: string]: boolean;
    };
    'app-state-sync-key': proto.Message.IAppStateSyncKeyData;
    'app-state-sync-version': LTHashState;
};
<<<<<<< HEAD
export type SignalDataSet = {
=======
export declare type SignalDataSet = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    [T in keyof SignalDataTypeMap]?: {
        [id: string]: SignalDataTypeMap[T] | null;
    };
};
<<<<<<< HEAD
type Awaitable<T> = T | Promise<T>;
export type SignalKeyStore = {
=======
declare type Awaitable<T> = T | Promise<T>;
export declare type SignalKeyStore = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    get<T extends keyof SignalDataTypeMap>(type: T, ids: string[]): Awaitable<{
        [id: string]: SignalDataTypeMap[T];
    }>;
    set(data: SignalDataSet): Awaitable<void>;
    /** clear all the data in the store */
    clear?(): Awaitable<void>;
};
<<<<<<< HEAD
export type SignalKeyStoreWithTransaction = SignalKeyStore & {
    isInTransaction: () => boolean;
    transaction<T>(exec: () => Promise<T>): Promise<T>;
};
export type TransactionCapabilityOptions = {
    maxCommitRetries: number;
    delayBetweenTriesMs: number;
};
export type SignalAuthState = {
    creds: SignalCreds;
    keys: SignalKeyStore | SignalKeyStoreWithTransaction;
};
export type AuthenticationState = {
=======
export declare type SignalKeyStoreWithTransaction = SignalKeyStore & {
    isInTransaction: () => boolean;
    transaction<T>(exec: () => Promise<T>): Promise<T>;
};
export declare type TransactionCapabilityOptions = {
    maxCommitRetries: number;
    delayBetweenTriesMs: number;
};
export declare type SignalAuthState = {
    creds: SignalCreds;
    keys: SignalKeyStore | SignalKeyStoreWithTransaction;
};
export declare type AuthenticationState = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    creds: AuthenticationCreds;
    keys: SignalKeyStore;
};
export {};
