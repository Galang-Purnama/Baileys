import { proto } from '../../WAProto';
<<<<<<< HEAD
type DecryptGroupSignalOpts = {
=======
declare type DecryptGroupSignalOpts = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    group: string;
    authorJid: string;
    msg: Uint8Array;
};
<<<<<<< HEAD
type ProcessSenderKeyDistributionMessageOpts = {
    item: proto.Message.ISenderKeyDistributionMessage;
    authorJid: string;
};
type DecryptSignalProtoOpts = {
=======
declare type ProcessSenderKeyDistributionMessageOpts = {
    item: proto.Message.ISenderKeyDistributionMessage;
    authorJid: string;
};
declare type DecryptSignalProtoOpts = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    jid: string;
    type: 'pkmsg' | 'msg';
    ciphertext: Uint8Array;
};
<<<<<<< HEAD
type EncryptMessageOpts = {
    jid: string;
    data: Uint8Array;
};
type EncryptGroupMessageOpts = {
=======
declare type EncryptMessageOpts = {
    jid: string;
    data: Uint8Array;
};
declare type EncryptGroupMessageOpts = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    group: string;
    data: Uint8Array;
    meId: string;
};
<<<<<<< HEAD
type PreKey = {
    keyId: number;
    publicKey: Uint8Array;
};
type SignedPreKey = PreKey & {
    signature: Uint8Array;
};
type E2ESession = {
=======
declare type PreKey = {
    keyId: number;
    publicKey: Uint8Array;
};
declare type SignedPreKey = PreKey & {
    signature: Uint8Array;
};
declare type E2ESession = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    registrationId: number;
    identityKey: Uint8Array;
    signedPreKey: SignedPreKey;
    preKey: PreKey;
};
<<<<<<< HEAD
type E2ESessionOpts = {
    jid: string;
    session: E2ESession;
};
export type SignalRepository = {
=======
declare type E2ESessionOpts = {
    jid: string;
    session: E2ESession;
};
export declare type SignalRepository = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    decryptGroupMessage(opts: DecryptGroupSignalOpts): Promise<Uint8Array>;
    processSenderKeyDistributionMessage(opts: ProcessSenderKeyDistributionMessageOpts): Promise<void>;
    decryptMessage(opts: DecryptSignalProtoOpts): Promise<Uint8Array>;
    encryptMessage(opts: EncryptMessageOpts): Promise<{
        type: 'pkmsg' | 'msg';
        ciphertext: Uint8Array;
    }>;
    encryptGroupMessage(opts: EncryptGroupMessageOpts): Promise<{
        senderKeyDistributionMessage: Uint8Array;
        ciphertext: Uint8Array;
    }>;
    injectE2ESession(opts: E2ESessionOpts): Promise<void>;
    jidToSignalProtocolAddress(jid: string): string;
};
export {};
