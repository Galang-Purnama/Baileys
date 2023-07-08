import { WAMediaUpload } from './Message';
<<<<<<< HEAD
export type CatalogResult = {
=======
export declare type CatalogResult = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    data: {
        paging: {
            cursors: {
                before: string;
                after: string;
            };
        };
        data: any[];
    };
};
<<<<<<< HEAD
export type ProductCreateResult = {
=======
export declare type ProductCreateResult = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    data: {
        product: {};
    };
};
<<<<<<< HEAD
export type CatalogStatus = {
    status: string;
    canAppeal: boolean;
};
export type CatalogCollection = {
=======
export declare type CatalogStatus = {
    status: string;
    canAppeal: boolean;
};
export declare type CatalogCollection = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    id: string;
    name: string;
    products: Product[];
    status: CatalogStatus;
};
<<<<<<< HEAD
export type ProductAvailability = 'in stock';
export type ProductBase = {
=======
export declare type ProductAvailability = 'in stock';
export declare type ProductBase = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    name: string;
    retailerId?: string;
    url?: string;
    description: string;
    price: number;
    currency: string;
    isHidden?: boolean;
};
<<<<<<< HEAD
export type ProductCreate = ProductBase & {
=======
export declare type ProductCreate = ProductBase & {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    /** ISO country code for product origin. Set to undefined for no country */
    originCountryCode: string | undefined;
    /** images of the product */
    images: WAMediaUpload[];
};
<<<<<<< HEAD
export type ProductUpdate = Omit<ProductCreate, 'originCountryCode'>;
export type Product = ProductBase & {
=======
export declare type ProductUpdate = Omit<ProductCreate, 'originCountryCode'>;
export declare type Product = ProductBase & {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    id: string;
    imageUrls: {
        [_: string]: string;
    };
    reviewStatus: {
        [_: string]: string;
    };
    availability: ProductAvailability;
};
<<<<<<< HEAD
export type OrderPrice = {
    currency: string;
    total: number;
};
export type OrderProduct = {
=======
export declare type OrderPrice = {
    currency: string;
    total: number;
};
export declare type OrderProduct = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    id: string;
    imageUrl: string;
    name: string;
    quantity: number;
    currency: string;
    price: number;
};
<<<<<<< HEAD
export type OrderDetails = {
    price: OrderPrice;
    products: OrderProduct[];
};
export type CatalogCursor = string;
export type GetCatalogOptions = {
=======
export declare type OrderDetails = {
    price: OrderPrice;
    products: OrderProduct[];
};
export declare type CatalogCursor = string;
export declare type GetCatalogOptions = {
>>>>>>> 2cd4b773e9a4e18575636e02b5e9ea85e544ac1d
    /** cursor to start from */
    cursor?: CatalogCursor;
    /** number of products to fetch */
    limit?: number;
    jid?: string;
};
