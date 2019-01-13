import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlogCategoryModule } from './category/category.module';
import { BlogEntryModule } from './entry/entry.module';
import { BlogTagModule } from './tag/tag.module';
import { BlogProductCategoryModule as ShopProductCategoryModule } from './shop/product-category/product-category.module';
import { BlogProductModule as ShopProductModule } from './shop/product/product.module';
import { BlogReviewModule as ShopReviewModule } from './shop/review/review.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        BlogCategoryModule,
        BlogEntryModule,
        BlogTagModule,
        ShopProductCategoryModule,
        ShopProductModule,
        ShopReviewModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogEntityModule {}
