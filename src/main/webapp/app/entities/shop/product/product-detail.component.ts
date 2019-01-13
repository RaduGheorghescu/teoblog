import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JhiDataUtils } from 'ng-jhipster';

import { IProduct } from 'app/shared/model/shop/product.model';
import { ReviewService } from 'app/entities/shop/review';
import { IReview } from 'app/shared/model/shop/review.model';

@Component({
    selector: 'jhi-product-detail',
    templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    product: IProduct;
    reviews: IReview[];

    constructor(protected dataUtils: JhiDataUtils, protected activatedRoute: ActivatedRoute, private reviewService: ReviewService) {}

    ngOnInit() {
        this.activatedRoute.data.subscribe(({ product }) => {
            this.product = product;
            this.reviewService.getReviewsByProduct(this.product.id).subscribe(res => {
                this.reviews = res;
                console.log(this.reviews);
            });
        });
    }

    byteSize(field) {
        return this.dataUtils.byteSize(field);
    }

    openFile(contentType, field) {
        return this.dataUtils.openFile(contentType, field);
    }
    previousState() {
        window.history.back();
    }
}
