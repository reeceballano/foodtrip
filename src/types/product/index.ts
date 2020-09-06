export interface ProductInterface {
    id: number;
    name: string;
    price: number;
    image: string;
}

export interface StateInterface {
    newProduct: string;
    products: ProductInterface[];
}