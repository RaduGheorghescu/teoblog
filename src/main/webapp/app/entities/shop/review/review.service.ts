import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IReview } from 'app/shared/model/shop/review.model';
import { IProduct } from 'app/shared/model/shop/product.model';

type EntityResponseType = HttpResponse<IReview>;
type EntityArrayResponseType = HttpResponse<IReview[]>;

@Injectable({ providedIn: 'root' })
export class ReviewService {
    public resourceUrl = SERVER_API_URL + 'shop/api/reviews';
    public resourceSearchUrl = SERVER_API_URL + 'shop/api/_search/reviews';

    constructor(protected http: HttpClient) {}

    create(review: IReview): Observable<EntityResponseType> {
        return this.http.post<IReview>(this.resourceUrl, review, { observe: 'response' });
    }

    update(review: IReview): Observable<EntityResponseType> {
        return this.http.put<IReview>(this.resourceUrl, review, { observe: 'response' });
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http.get<IReview>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    getReviewsByProduct(id: number): Observable<IReview[]> {
        return this.http.get<IReview[]>(this.resourceUrl + 'Product/' + id);
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IReview[]>(this.resourceUrl, { params: options, observe: 'response' });
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    search(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http.get<IReview[]>(this.resourceSearchUrl, { params: options, observe: 'response' });
    }
}
