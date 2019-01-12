import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgbDateAdapter } from '@ng-bootstrap/ng-bootstrap';

import { NgbDateMomentAdapter } from './util/datepicker-adapter';
import { BlogSharedLibsModule, BlogSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
    imports: [BlogSharedLibsModule, BlogSharedCommonModule],
    declarations: [HasAnyAuthorityDirective],
    providers: [{ provide: NgbDateAdapter, useClass: NgbDateMomentAdapter }],
    exports: [BlogSharedCommonModule, HasAnyAuthorityDirective],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BlogSharedModule {
    static forRoot() {
        return {
            ngModule: BlogSharedModule
        };
    }
}
