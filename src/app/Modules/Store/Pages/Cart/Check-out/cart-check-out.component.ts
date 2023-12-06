import { Component, OnInit } from "@angular/core";
import { CartService } from "../../../Services/app-cart.service";

@Component({
    templateUrl: 'cart-check-out.component.html',
})
export class CartCheckOutComponent {

    Cupom: string = ''
    get Cart() {return this.cartService.Cart}
    constructor(private readonly cartService: CartService) {}

    applyCupom(){
        this.cartService.ApplyCoupon(this.Cupom).subscribe()
    }

    clear(){
        this.cartService.Reset();
    }
}