export type Category = {
    categoryId: string;
    name: string;
};
export type Item = {
    itemId: string;
    name: string;
    description: string;
    categoryId: string;
};
export type Variant = {
    itemId: string;
    size: Size;
    price: number;
};
export declare enum Size {
    SMALL = "Small",
    MEDIUM = "Medium",
    LARGE = "Large"
}
