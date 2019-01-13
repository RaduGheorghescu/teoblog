import { IProductCategory } from 'app/shared/model/shop/product-category.model';

export interface IProduct {
    id?: number;
    productName?: string;
    price?: number;
    description?: any;
    productCategory?: IProductCategory;
}

export class Product implements IProduct {
    constructor(
        public id?: number,
        public productName?: string,
        public price?: number,
        public description?: any,
        public productCategory?: IProductCategory
    ) {}
}
