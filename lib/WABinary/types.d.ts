import * as constants from './constants';
/**
 * the binary node WA uses internally for communication
 *
 * this is manipulated soley as an object and it does not have any functions.
 * This is done for easy serialization, to prevent running into issues with prototypes &
 * to maintain functional code structure
 * */
<<<<<<< HEAD
export type BinaryNode = {
=======
export declare type BinaryNode = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    tag: string;
    attrs: {
        [key: string]: string;
    };
    content?: BinaryNode[] | string | Uint8Array;
};
<<<<<<< HEAD
export type BinaryNodeAttributes = BinaryNode['attrs'];
export type BinaryNodeData = BinaryNode['content'];
export type BinaryNodeCodingOptions = typeof constants;
=======
export declare type BinaryNodeAttributes = BinaryNode['attrs'];
export declare type BinaryNodeData = BinaryNode['content'];
export declare type BinaryNodeCodingOptions = typeof constants;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
