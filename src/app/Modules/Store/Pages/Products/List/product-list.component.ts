import { Component, OnInit } from "@angular/core";
import { ProductSimpleResponse } from "src/app/apis/Products/models/responses/product-simple.response";
import { ProductQueryRequest } from "src/app/apis/Products/models/requests/product-query.request";
import { ApiProductsService } from "src/app/apis/Products/api-products.service";
import { CartService } from "../../../Services/app-cart.service";

@Component({
    templateUrl: 'product-list.component.html',
    styles: [`
    
    `]
})
export class ProductListComponent implements OnInit {
    
    request = new ProductQueryRequest();
    products : ProductSimpleResponse[] | undefined;

    get hasCart() { return this.cartService.Cart }
    constructor(private readonly productsService : ApiProductsService,
                private readonly cartService: CartService) {

    }

    ngOnInit(): void {
        this.GetProducts();
    }

    GetProducts(){
       this.productsService.Query(this.request).subscribe(x => {
         this.products = x
       })
    }
}