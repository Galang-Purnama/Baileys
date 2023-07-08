import type { proto } from '../../WAProto';
import type { AccountSettings } from './Auth';
import type { BufferedEventData } from './Events';
import type { ChatLabelAssociationActionBody } from './LabelAssociation';
import type { MessageLabelAssociationActionBody } from './LabelAssociation';
import type { MinimalMessage } from './Message';
/** privacy settings in WhatsApp Web */
<<<<<<< HEAD
export type WAPrivacyValue = 'all' | 'contacts' | 'contact_blacklist' | 'none';
export type WAPrivacyOnlineValue = 'all' | 'match_last_seen';
export type WAReadReceiptsValue = 'all' | 'none';
/** set of statuses visible to other people; see updatePresence() in WhatsAppWeb.Send */
export type WAPresence = 'unavailable' | 'available' | 'composing' | 'recording' | 'paused';
export declare const ALL_WA_PATCH_NAMES: readonly ["critical_block", "critical_unblock_low", "regular_high", "regular_low", "regular"];
export type WAPatchName = typeof ALL_WA_PATCH_NAMES[number];
=======
export declare type WAPrivacyValue = 'all' | 'contacts' | 'contact_blacklist' | 'none';
export declare type WAPrivacyOnlineValue = 'all' | 'match_last_seen';
export declare type WAReadReceiptsValue = 'all' | 'none';
/** set of statuses visible to other people; see updatePresence() in WhatsAppWeb.Send */
export declare type WAPresence = 'unavailable' | 'available' | 'composing' | 'recording' | 'paused';
export declare const ALL_WA_PATCH_NAMES: readonly ["critical_block", "critical_unblock_low", "regular_high", "regular_low", "regular"];
export declare type WAPatchName = typeof ALL_WA_PATCH_NAMES[number];
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
export interface PresenceData {
    lastKnownPresence: WAPresence;
    lastSeen?: number;
}
<<<<<<< HEAD
export type ChatMutation = {
    syncAction: proto.ISyncActionData;
    index: string[];
};
export type WAPatchCreate = {
=======
export declare type ChatMutation = {
    syncAction: proto.ISyncActionData;
    index: string[];
};
export declare type WAPatchCreate = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    syncAction: proto.ISyncActionValue;
    index: string[];
    type: WAPatchName;
    apiVersion: number;
    operation: proto.SyncdMutation.SyncdOperation;
};
<<<<<<< HEAD
export type Chat = proto.IConversation & {
    /** unix timestamp of when the last message was received in the chat */
    lastMessageRecvTimestamp?: number;
};
export type ChatUpdate = Partial<Chat & {
=======
export declare type Chat = proto.IConversation & {
    /** unix timestamp of when the last message was received in the chat */
    lastMessageRecvTimestamp?: number;
};
export declare type ChatUpdate = Partial<Chat & {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    /**
     * if specified in the update,
     * the EV buffer will check if the condition gets fulfilled before applying the update
     * Right now, used to determine when to release an app state sync event
     *
     * @returns true, if the update should be applied;
     * false if it can be discarded;
     * undefined if the condition is not yet fulfilled
     * */
    conditional: (bufferedData: BufferedEventData) => boolean | undefined;
}>;
/**
 * the last messages in a chat, sorted reverse-chronologically. That is, the latest message should be first in the chat
 * for MD modifications, the last message in the array (i.e. the earlist message) must be the last message recv in the chat
 * */
<<<<<<< HEAD
export type LastMessageList = MinimalMessage[] | proto.SyncActionValue.ISyncActionMessageRange;
export type ChatModification = {
=======
export declare type LastMessageList = MinimalMessage[] | proto.SyncActionValue.ISyncActionMessageRange;
export declare type ChatModification = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    archive: boolean;
    lastMessages: LastMessageList;
} | {
    pushNameSetting: string;
} | {
    pin: boolean;
} | {
    /** mute for duration, or provide timestamp of mute to remove*/
    mute: number | null;
} | {
    clear: 'all' | {
        messages: {
            id: string;
            fromMe?: boolean;
            timestamp: number;
        }[];
    };
} | {
    star: {
        messages: {
            id: string;
            fromMe?: boolean;
        }[];
        star: boolean;
    };
} | {
    markRead: boolean;
    lastMessages: LastMessageList;
} | {
    delete: true;
    lastMessages: LastMessageList;
} | {
    addChatLabel: ChatLabelAssociationActionBody;
} | {
    removeChatLabel: ChatLabelAssociationActionBody;
} | {
    addMessageLabel: MessageLabelAssociationActionBody;
} | {
    removeMessageLabel: MessageLabelAssociationActionBody;
};
<<<<<<< HEAD
export type InitialReceivedChatsState = {
=======
export declare type InitialReceivedChatsState = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    [jid: string]: {
        /** the last message received from the other party */
        lastMsgRecvTimestamp?: number;
        /** the absolute last message in the chat */
        lastMsgTimestamp: number;
    };
};
<<<<<<< HEAD
export type InitialAppStateSyncOptions = {
=======
export declare type InitialAppStateSyncOptions = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    accountSettings: AccountSettings;
};
