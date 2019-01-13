import { IProduct } from 'app/shared/model/shop/product.model';

export const enum RatingEnum {
    WEAK = 'WEAK',
    ACCEPTABLE = 'ACCEPTABLE',
    GOOD = 'GOOD',
    RECOMMANDED = 'RECOMMANDED',
    EXCELENT = 'EXCELENT'
}

export interface IReview {
    id?: number;
    comment?: any;
    rating?: RatingEnum;
    product?: IProduct;
}

export class Review implements IReview {
    constructor(public id?: number, public comment?: any, public rating?: RatingEnum, public product?: IProduct) {}
}
