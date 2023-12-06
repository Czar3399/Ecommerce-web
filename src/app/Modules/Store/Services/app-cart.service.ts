import { Injectable } from "@angular/core";
import { ApiCartsService } from "src/app/apis/Carts/api-cart.service";
import { CartSimpleResponse } from "src/app/apis/Carts/Models/responses/cart-simple.response";
import { CartResponse } from "src/app/apis/Carts/Models/responses/cart.response";
import { LocalStorageService } from "src/app/Shared/Services/localstorage.service";

const cartkey = "xx-cart-key";

@Injectable({
  providedIn: "root",
})
export class CartService {
  Cart: CartResponse | undefined;

  constructor(
    private readonly cartService: ApiCartsService,
    private readonly localStorage: LocalStorageService
  ) {}

  Init() {
    var cartRetrive = this.localStorage.get(cartkey);
    var getCart = cartRetrive.success
      ? this.cartService.Get(Number(cartRetrive.data))
      : this.cartService.Create();

    getCart.subscribe({
      next: (cart) => (this.Cart = cart),
    });
  }

  ChangeProduct(productId: number, quantity: number) {
    return this.cartService.ChangeProducts();
  }

  GetQuantity(productId: number) {
    return (
      this.Cart?.Products?.find((x) => x.ProductId == productId)?.Quantity ?? 0
    );
  }
}
