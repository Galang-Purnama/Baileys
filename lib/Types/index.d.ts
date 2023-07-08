export * from './Auth';
export * from './GroupMetadata';
export * from './Chat';
export * from './Contact';
export * from './State';
export * from './Message';
export * from './Socket';
export * from './Events';
export * from './Product';
export * from './Call';
export * from './Signal';
import { AuthenticationState } from './Auth';
import { SocketConfig } from './Socket';
<<<<<<< HEAD
export type UserFacingSocketConfig = Partial<SocketConfig> & {
=======
export declare type UserFacingSocketConfig = Partial<SocketConfig> & {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    auth: AuthenticationState;
};
export declare enum DisconnectReason {
    connectionClosed = 428,
    connectionLost = 408,
    connectionReplaced = 440,
    timedOut = 408,
    loggedOut = 401,
    badSession = 500,
    restartRequired = 515,
    multideviceMismatch = 411
}
<<<<<<< HEAD
export type WAInitResponse = {
=======
export declare type WAInitResponse = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    ref: string;
    ttl: number;
    status: 200;
};
<<<<<<< HEAD
export type WABusinessHoursConfig = {
=======
export declare type WABusinessHoursConfig = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    day_of_week: string;
    mode: string;
    open_time?: number;
    close_time?: number;
};
<<<<<<< HEAD
export type WABusinessProfile = {
=======
export declare type WABusinessProfile = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    description: string;
    email: string | undefined;
    business_hours: {
        timezone?: string;
        config?: WABusinessHoursConfig[];
        business_config?: WABusinessHoursConfig[];
    };
    website: string[];
    category?: string;
    wid?: string;
    address?: string;
};
<<<<<<< HEAD
export type CurveKeyPair = {
=======
export declare type CurveKeyPair = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    private: Uint8Array;
    public: Uint8Array;
};
