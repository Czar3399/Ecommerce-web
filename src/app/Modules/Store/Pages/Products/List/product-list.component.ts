import { Component, OnInit } from "@angular/core";
import { ApiCartsService } from "src/app/apis/Carts/api-cart.service";
import { ProductSimpleResponse } from "src/app/apis/Products/models/responses/product-simple.response";
import { ApiProductsService } from "src/app/apis/Products/api-products.service";

@Component({
    templateUrl: 'product-list.component.html',
    styles: [`
    
    `]
})
export class ProductListComponent implements OnInit {
    
    products : ProductSimpleResponse[] | undefined;
    constructor(private readonly productsService : ApiProductsService,
                private readonly cartsService: ApiCartsService) {

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