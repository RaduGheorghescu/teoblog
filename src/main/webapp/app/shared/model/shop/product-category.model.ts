export interface IProductCategory {
    id?: number;
    categoryName?: string;
}

export class ProductCategory implements IProductCategory {
    constructor(public id?: number, public categoryName?: string) {}
}
