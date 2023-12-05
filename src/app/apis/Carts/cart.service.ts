import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class CartsService {
    private readonly _baseUrl = environment.Apis.ecommerce + "carts";
    constructor(private readonly http: HttpClient) {}

    Get(id: number): Observable<any>{
        return this.http.get(this._baseUrl + id)
    }

    Create(): Observable<any>{
        return this.http.post(this._baseUrl, {})
    }

    ChangeProducts(): Observable<any>{
        return this.http.put(this._baseUrl + "products", {})
    }

    ApplyCoupon(): Observable<any>{
        return this.http.put(this._baseUrl + "coupons", {})
    }

    Submit(): Observable<any>{
        return this.http.put(this._baseUrl + "submit", {})
    }
}