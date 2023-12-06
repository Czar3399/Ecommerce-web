import { CartProductResponse } from "./cart-product.response";
import { CartSimpleResponse } from "./cart-simple.response";

export interface CartResponse extends CartSimpleResponse {
    CartProducts: CartProductResponse[];
}