import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CartProductRequest } from './Models/requests/cart-products-add.request';
import { CartResponse } from './Models/responses/cart.response';
import { CartProductResponse } from './Models/responses/cart-product.response';

@Injectable({
    providedIn: 'root',
})
export class ApiCartsService {
    private readonly _baseUrl = environment.Apis.ecommerce + "carts/";
    constructor(private readonly http: HttpClient) {}

    Get(id: number): Observable<CartResponse>{
        return this.http.get<CartResponse>(this._baseUrl + id)
    }

    Create(): Observable<CartResponse>{
        return this.http.post<CartResponse>(this._baseUrl, {})
    }

    ChangeProducts(id: number, request: CartProductRequest): Observable<CartResponse>{
        return this.http.put<CartResponse>(this._baseUrl + id + "/products", request)
    }

    ApplyCoupon(id: number, cupom: string): Observable<CartResponse>{
        return this.http.put<CartResponse>(this._baseUrl  + id + "/coupons", {}, { params : {coupon: cupom}})
    }

    Submit(id: number): Observable<any>{
        return this.http.put(this._baseUrl  + id + "/submit", {})
    }
}