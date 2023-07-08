/// <reference types="node" />
<<<<<<< HEAD
/// <reference types="node" />
/// <reference types="node" />
=======
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
import { AxiosRequestConfig } from 'axios';
import type { Logger } from 'pino';
import type { Readable } from 'stream';
import type { URL } from 'url';
import { proto } from '../../WAProto';
import { MEDIA_HKDF_KEY_MAPPING } from '../Defaults';
import type { GroupMetadata } from './GroupMetadata';
import { CacheStore } from './Socket';
export { proto as WAProto };
<<<<<<< HEAD
export type WAMessage = proto.IWebMessageInfo;
export type WAMessageContent = proto.IMessage;
export type WAContactMessage = proto.Message.IContactMessage;
export type WAContactsArrayMessage = proto.Message.IContactsArrayMessage;
export type WAMessageKey = proto.IMessageKey;
export type WATextMessage = proto.Message.IExtendedTextMessage;
export type WAContextInfo = proto.IContextInfo;
export type WALocationMessage = proto.Message.ILocationMessage;
export type WAGenericMediaMessage = proto.Message.IVideoMessage | proto.Message.IImageMessage | proto.Message.IAudioMessage | proto.Message.IDocumentMessage | proto.Message.IStickerMessage;
export import WAMessageStubType = proto.WebMessageInfo.StubType;
export import WAMessageStatus = proto.WebMessageInfo.Status;
export type WAMediaUpload = Buffer | {
=======
export declare type WAMessage = proto.IWebMessageInfo;
export declare type WAMessageContent = proto.IMessage;
export declare type WAContactMessage = proto.Message.IContactMessage;
export declare type WAContactsArrayMessage = proto.Message.IContactsArrayMessage;
export declare type WAMessageKey = proto.IMessageKey;
export declare type WATextMessage = proto.Message.IExtendedTextMessage;
export declare type WAContextInfo = proto.IContextInfo;
export declare type WALocationMessage = proto.Message.ILocationMessage;
export declare type WAGenericMediaMessage = proto.Message.IVideoMessage | proto.Message.IImageMessage | proto.Message.IAudioMessage | proto.Message.IDocumentMessage | proto.Message.IStickerMessage;
export import WAMessageStubType = proto.WebMessageInfo.StubType;
export import WAMessageStatus = proto.WebMessageInfo.Status;
export declare type WAMediaUpload = Buffer | {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    url: URL | string;
} | {
    stream: Readable;
};
/** Set of message types that are supported by the library */
<<<<<<< HEAD
export type MessageType = keyof proto.Message;
export type DownloadableMessage = {
=======
export declare type MessageType = keyof proto.Message;
export declare type DownloadableMessage = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    mediaKey?: Uint8Array | null;
    directPath?: string | null;
    url?: string | null;
};
<<<<<<< HEAD
export type MessageReceiptType = 'read' | 'read-self' | 'hist_sync' | 'peer_msg' | 'sender' | 'inactive' | 'played' | undefined;
export type MediaConnInfo = {
=======
export declare type MessageReceiptType = 'read' | 'read-self' | 'hist_sync' | 'peer_msg' | 'sender' | 'inactive' | 'played' | undefined;
export declare type MediaConnInfo = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    auth: string;
    ttl: number;
    hosts: {
        hostname: string;
        maxContentLengthBytes: number;
    }[];
    fetchDate: Date;
};
export interface WAUrlInfo {
    'canonical-url': string;
    'matched-text': string;
    title: string;
    description?: string;
    jpegThumbnail?: Buffer;
    highQualityThumbnail?: proto.Message.IImageMessage;
    originalThumbnailUrl?: string;
}
<<<<<<< HEAD
type Mentionable = {
    /** list of jids that are mentioned in the accompanying text */
    mentions?: string[];
};
type Contextable = {
    /** add contextInfo to the message */
    contextInfo?: proto.IContextInfo;
};
type ViewOnce = {
    viewOnce?: boolean;
};
type Buttonable = {
    /** add buttons to the message  */
    buttons?: proto.Message.ButtonsMessage.IButton[];
};
type Templatable = {
=======
declare type Mentionable = {
    /** list of jids that are mentioned in the accompanying text */
    mentions?: string[];
};
declare type ViewOnce = {
    viewOnce?: boolean;
};
declare type Buttonable = {
    /** add buttons to the message  */
    buttons?: proto.Message.ButtonsMessage.IButton[];
};
declare type Templatable = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    /** add buttons to the message (conflicts with normal buttons)*/
    templateButtons?: proto.IHydratedTemplateButton[];
    footer?: string;
};
<<<<<<< HEAD
type Editable = {
    edit?: WAMessageKey;
};
type Listable = {
=======
declare type Editable = {
    edit?: WAMessageKey;
};
declare type Listable = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    /** Sections of the List */
    sections?: proto.Message.ListMessage.ISection[];
    /** Title of a List Message only */
    title?: string;
    /** Text of the bnutton on the list (required) */
    buttonText?: string;
};
<<<<<<< HEAD
type WithDimensions = {
    width?: number;
    height?: number;
};
export type PollMessageOptions = {
=======
declare type WithDimensions = {
    width?: number;
    height?: number;
};
export declare type PollMessageOptions = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    name: string;
    selectableCount?: number;
    values: string[];
    /** 32 byte message secret to encrypt poll selections */
    messageSecret?: Uint8Array;
};
<<<<<<< HEAD
export type MediaType = keyof typeof MEDIA_HKDF_KEY_MAPPING;
export type AnyMediaMessageContent = (({
    image: WAMediaUpload;
    caption?: string;
    jpegThumbnail?: string;
} & Mentionable & Contextable & Buttonable & Templatable & WithDimensions) | ({
=======
export declare type MediaType = keyof typeof MEDIA_HKDF_KEY_MAPPING;
export declare type AnyMediaMessageContent = (({
    image: WAMediaUpload;
    caption?: string;
    jpegThumbnail?: string;
} & Mentionable & Buttonable & Templatable & WithDimensions) | ({
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    video: WAMediaUpload;
    caption?: string;
    gifPlayback?: boolean;
    jpegThumbnail?: string;
<<<<<<< HEAD
} & Mentionable & Contextable & Buttonable & Templatable & WithDimensions) | {
=======
} & Mentionable & Buttonable & Templatable & WithDimensions) | {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    audio: WAMediaUpload;
    /** if set to true, will send as a `voice note` */
    ptt?: boolean;
    /** optionally tell the duration of the audio */
    seconds?: number;
} | ({
    sticker: WAMediaUpload;
    isAnimated?: boolean;
} & WithDimensions) | ({
    document: WAMediaUpload;
    mimetype: string;
    fileName?: string;
    caption?: string;
<<<<<<< HEAD
} & Contextable & Buttonable & Templatable)) & {
    mimetype?: string;
} & Editable;
export type ButtonReplyInfo = {
=======
} & Buttonable & Templatable)) & {
    mimetype?: string;
} & Editable;
export declare type ButtonReplyInfo = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    displayText: string;
    id: string;
    index: number;
};
<<<<<<< HEAD
export type WASendableProduct = Omit<proto.Message.ProductMessage.IProductSnapshot, 'productImage'> & {
    productImage: WAMediaUpload;
};
export type AnyRegularMessageContent = (({
    text: string;
    linkPreview?: WAUrlInfo | null;
} & Mentionable & Contextable & Buttonable & Templatable & Listable & Editable) | AnyMediaMessageContent | ({
    poll: PollMessageOptions;
} & Mentionable & Contextable & Buttonable & Templatable & Editable) | {
=======
export declare type WASendableProduct = Omit<proto.Message.ProductMessage.IProductSnapshot, 'productImage'> & {
    productImage: WAMediaUpload;
};
export declare type AnyRegularMessageContent = (({
    text: string;
    linkPreview?: WAUrlInfo | null;
} & Mentionable & Buttonable & Templatable & Listable & Editable) | AnyMediaMessageContent | ({
    poll: PollMessageOptions;
} & Mentionable & Buttonable & Templatable & Editable) | {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    contacts: {
        displayName?: string;
        contacts: proto.Message.IContactMessage[];
    };
} | {
    location: WALocationMessage;
} | {
    react: proto.Message.IReactionMessage;
} | {
    buttonReply: ButtonReplyInfo;
    type: 'template' | 'plain';
} | {
    listReply: Omit<proto.Message.IListResponseMessage, 'contextInfo'>;
} | {
    product: WASendableProduct;
    businessOwnerJid?: string;
    body?: string;
    footer?: string;
}) & ViewOnce;
<<<<<<< HEAD
export type AnyMessageContent = AnyRegularMessageContent | {
=======
export declare type AnyMessageContent = AnyRegularMessageContent | {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    forward: WAMessage;
    force?: boolean;
} | {
    /** Delete your message or anyone's message in a group (admin required) */
    delete: WAMessageKey;
} | {
    disappearingMessagesInChat: boolean | number;
};
<<<<<<< HEAD
export type GroupMetadataParticipants = Pick<GroupMetadata, 'participants'>;
type MinimalRelayOptions = {
=======
export declare type GroupMetadataParticipants = Pick<GroupMetadata, 'participants'>;
declare type MinimalRelayOptions = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    /** override the message ID with a custom provided string */
    messageId?: string;
    /** cached group metadata, use to prevent redundant requests to WA & speed up msg sending */
    cachedGroupMetadata?: (jid: string) => Promise<GroupMetadataParticipants | undefined>;
};
<<<<<<< HEAD
export type MessageRelayOptions = MinimalRelayOptions & {
=======
export declare type MessageRelayOptions = MinimalRelayOptions & {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    /** only send to a specific participant; used when a message decryption fails for a single user */
    participant?: {
        jid: string;
        count: number;
    };
    /** additional attributes to add to the WA binary node */
    additionalAttributes?: {
        [_: string]: string;
    };
    /** should we use the devices cache, or fetch afresh from the server; default assumed to be "true" */
    useUserDevicesCache?: boolean;
<<<<<<< HEAD
    /** jid list of participants for status@broadcast */
    statusJidList?: string[];
};
export type MiscMessageGenerationOptions = MinimalRelayOptions & {
=======
};
export declare type MiscMessageGenerationOptions = MinimalRelayOptions & {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    /** optional, if you want to manually set the timestamp of the message */
    timestamp?: Date;
    /** the message you want to quote */
    quoted?: WAMessage;
    /** disappearing messages settings */
    ephemeralExpiration?: number | string;
    /** timeout for media upload to WA server */
    mediaUploadTimeoutMs?: number;
<<<<<<< HEAD
    /** jid list of participants for status@broadcast */
    statusJidList?: string[];
    /** backgroundcolor for status */
    backgroundColor?: string;
    /** font type for status */
    font?: number;
};
export type MessageGenerationOptionsFromContent = MiscMessageGenerationOptions & {
    userJid: string;
};
export type WAMediaUploadFunction = (readStream: Readable, opts: {
=======
};
export declare type MessageGenerationOptionsFromContent = MiscMessageGenerationOptions & {
    userJid: string;
};
export declare type WAMediaUploadFunction = (readStream: Readable, opts: {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    fileEncSha256B64: string;
    mediaType: MediaType;
    timeoutMs?: number;
}) => Promise<{
    mediaUrl: string;
    directPath: string;
}>;
<<<<<<< HEAD
export type MediaGenerationOptions = {
=======
export declare type MediaGenerationOptions = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    logger?: Logger;
    mediaTypeOverride?: MediaType;
    upload: WAMediaUploadFunction;
    /** cache media so it does not have to be uploaded again */
    mediaCache?: CacheStore;
    mediaUploadTimeoutMs?: number;
    options?: AxiosRequestConfig;
<<<<<<< HEAD
    backgroundColor?: string;
    font?: number;
};
export type MessageContentGenerationOptions = MediaGenerationOptions & {
    getUrlInfo?: (text: string) => Promise<WAUrlInfo | undefined>;
};
export type MessageGenerationOptions = MessageContentGenerationOptions & MessageGenerationOptionsFromContent;
=======
};
export declare type MessageContentGenerationOptions = MediaGenerationOptions & {
    getUrlInfo?: (text: string) => Promise<WAUrlInfo | undefined>;
};
export declare type MessageGenerationOptions = MessageContentGenerationOptions & MessageGenerationOptionsFromContent;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
/**
 * Type of message upsert
 * 1. notify => notify the user, this message was just received
 * 2. append => append the message to the chat history, no notification required
 */
<<<<<<< HEAD
export type MessageUpsertType = 'append' | 'notify';
export type MessageUserReceipt = proto.IUserReceipt;
export type WAMessageUpdate = {
    update: Partial<WAMessage>;
    key: proto.IMessageKey;
};
export type WAMessageCursor = {
=======
export declare type MessageUpsertType = 'append' | 'notify';
export declare type MessageUserReceipt = proto.IUserReceipt;
export declare type WAMessageUpdate = {
    update: Partial<WAMessage>;
    key: proto.IMessageKey;
};
export declare type WAMessageCursor = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    before: WAMessageKey | undefined;
} | {
    after: WAMessageKey | undefined;
};
<<<<<<< HEAD
export type MessageUserReceiptUpdate = {
    key: proto.IMessageKey;
    receipt: MessageUserReceipt;
};
export type MediaDecryptionKeyInfo = {
=======
export declare type MessageUserReceiptUpdate = {
    key: proto.IMessageKey;
    receipt: MessageUserReceipt;
};
export declare type MediaDecryptionKeyInfo = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    iv: Buffer;
    cipherKey: Buffer;
    macKey?: Buffer;
};
<<<<<<< HEAD
export type MinimalMessage = Pick<proto.IWebMessageInfo, 'key' | 'messageTimestamp'>;
=======
export declare type MinimalMessage = Pick<proto.IWebMessageInfo, 'key' | 'messageTimestamp'>;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
