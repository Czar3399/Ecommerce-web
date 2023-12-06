import { Injectable } from "@angular/core";
import { ApiCartsService } from "src/app/apis/Carts/api-cart.service";
import { CartSimpleResponse } from "src/app/apis/Carts/Models/responses/cart-simple.response";
import { CartResponse } from "src/app/apis/Carts/Models/responses/cart.response";
import { LocalStorageService } from "src/app/Shared/Services/localstorage.service";
import {tap} from 'rxjs/operators'
const cartkey = "xx-cart-key";

@Injectable({
  providedIn: "root",
})
export class CartService {
  Cart!: CartResponse;

  constructor(
    private readonly cartService: ApiCartsService,
    private readonly localStorage: LocalStorageService
  ) {}

  Reset(){
    this.localStorage.clear();
    this.Init();
  }
  Init() {
    var cartRetrive = this.localStorage.get(cartkey);
    var getCart = cartRetrive.success
      ? this.cartService.Get(Number(cartRetrive.data))
      : this.cartService.Create()
      .pipe(tap(x => this.localStorage.set(cartkey, x.Id.toString())))

    getCart.subscribe({
      next: (cart) => {
        this.Cart = cart    
    },
    });
  }

  ApplyCoupon(cupom: string){
    return this.cartService.ApplyCoupon(this.Cart.Id, cupom)
    .pipe(tap(x => {
        this.Cart = x
    }));
  }
  ChangeProduct(productId: number, quantity: number) {
    return this.cartService.ChangeProducts(this.Cart.Id, { ProductId : productId, Quantity : quantity})
    .pipe(tap(x => {
        this.Cart = x
    }));
  }

  GetQuantity(productId: number) {
    return (
      this.Cart?.CartProducts?.find((x) => x.Product.Id == productId)?.Quantity ?? 0
    );
  }
}
