import { Component} from '@angular/core'
import { CartService } from '../../Services/app-cart.service';

@Component({
    selector: "app-store-header",
    templateUrl: "header.component.html"
})
export class HeaderComponent {

    get TotalPrice() { return this.cartService.Cart?.TotalPrice ?? 0 }
    /**
     *
     */
    constructor(private readonly cartService: CartService) {
    }
}