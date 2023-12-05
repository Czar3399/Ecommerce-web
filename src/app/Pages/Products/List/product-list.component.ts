import { Component, OnInit } from "@angular/core";
import { CartsService } from "src/app/apis/Carts/cart.service";
import { ProductSimpleResponse } from "src/app/apis/Products/models/responses/product-simple.response";
import { ProductsService } from "src/app/apis/Products/products.service";

@Component({
    templateUrl: 'product-list.component.html',
})
export class ProductListComponent implements OnInit {
    
    products : ProductSimpleResponse[] | undefined;
    constructor(private readonly productsService : ProductsService,
                private readonly cartsService: CartsService) {

    }

    ngOnInit(): void {
        this.GetProducts()
       
    }

    ChangeProduct() {

    }

    GetProducts(){
       this.productsService.Query({}).subscribe(x => {
         this.products = x
       })
    }
}