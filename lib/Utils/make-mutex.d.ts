export declare const makeMutex: () => {
    mutex<T>(code: () => T | Promise<T>): Promise<T>;
};
<<<<<<< HEAD
export type Mutex = ReturnType<typeof makeMutex>;
=======
export declare type Mutex = ReturnType<typeof makeMutex>;
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
export declare const makeKeyedMutex: () => {
    mutex<T>(key: string, task: () => T | Promise<T>): Promise<T>;
};
