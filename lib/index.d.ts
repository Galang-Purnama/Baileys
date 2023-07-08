import makeWASocket from './Socket';
export * from '../WAProto';
export * from './Utils';
export * from './Types';
export * from './Store';
export * from './Defaults';
export * from './WABinary';
<<<<<<< HEAD
export type WASocket = ReturnType<typeof makeWASocket>;
export { makeWASocket };
=======
export declare type WASocket = ReturnType<typeof makeWASocket>;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
export default makeWASocket;
