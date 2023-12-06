import { ProductSimpleResponse } from "src/app/apis/Products/models/responses/product-simple.response";

export interface CartProductResponse {
    Product: ProductSimpleResponse;
    TotalPrice: number;
    Quantity: number;
}