import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductSimpleResponse } from './models/responses/product-simple.response';
import { ProductQueryRequest } from './models/requests/product-query.request';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class ApiProductsService {
    private readonly _baseUrl = environment.Apis.ecommerce + "products";
    constructor(private readonly http: HttpClient) {}

    Query(request: ProductQueryRequest): Observable<ProductSimpleResponse[]>{
        console.log(request)
        return this.http.get<ProductSimpleResponse[]>(this._baseUrl, {params: {...request} as any});
    }
}