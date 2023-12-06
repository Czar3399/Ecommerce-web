import { Component, OnInit } from "@angular/core";
import { CartService } from "./Services/app-cart.service";

@Component({
    template: `
        <app-store-header></app-store-header>
        <div class="container w-75 pt-4">
            <router-outlet></router-outlet>
        </div>
    `
})
export class StoreComponent implements OnInit {
    /**
     *
     */
    constructor(private readonly cartService : CartService) {
    }
    ngOnInit(): void {
        this.cartService.Init();
    }

}