import { Contact } from './Contact';
<<<<<<< HEAD
export type WAConnectionState = 'open' | 'connecting' | 'close';
export type ConnectionState = {
=======
export declare type WAConnectionState = 'open' | 'connecting' | 'close';
export declare type ConnectionState = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    /** connection is now open, connecting or closed */
    connection: WAConnectionState;
    /** the error that caused the connection to close */
    lastDisconnect?: {
        error: Error | undefined;
        date: Date;
    };
    /** is this a new login */
    isNewLogin?: boolean;
    /** the current QR code */
    qr?: string;
    /** has the device received all pending notifications while it was offline */
    receivedPendingNotifications?: boolean;
    /** legacy connection options */
    legacy?: {
        phoneConnected: boolean;
        user?: Contact;
    };
    /**
     * if the client is shown as an active, online client.
     * If this is false, the primary phone and other devices will receive notifs
     * */
    isOnline?: boolean;
};
