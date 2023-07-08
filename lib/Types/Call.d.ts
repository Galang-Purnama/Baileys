<<<<<<< HEAD
export type WACallUpdateType = 'offer' | 'ringing' | 'timeout' | 'reject' | 'accept';
export type WACallEvent = {
=======
export declare type WACallUpdateType = 'offer' | 'ringing' | 'timeout' | 'reject' | 'accept';
export declare type WACallEvent = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    chatId: string;
    from: string;
    isGroup?: boolean;
    id: string;
    date: Date;
    isVideo?: boolean;
    status: WACallUpdateType;
    offline: boolean;
    latencyMs?: number;
};
