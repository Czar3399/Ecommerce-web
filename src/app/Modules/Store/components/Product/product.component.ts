import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { CartService } from "../../Services/app-cart.service";
import { Subject, debounceTime } from "rxjs";

@Component({
    selector:"app-product",
    templateUrl: 'product.component.html',
    styles: [`
    
    `]
})
export class ProductComponent implements OnInit{
    @Input() Id!: number; 
    @Input() Name!: string; 
    @Input() ImageUrl!: string; 
    @Input() Price!: number; 
    @Input() Trademark: string = "My company"; 
    Quantity: number  = 0;
    QuantityBeforeSave: number  = 0;


    saveDebounce = new Subject<number>();
    constructor(private readonly cartService: CartService) {}
    ngOnInit(): void {
        this.Quantity = this.cartService.GetQuantity(this.Id);
        this.QuantityBeforeSave = this.Quantity;
    }

   
    ChangeQuantity(value: number){
        this.Quantity += value;

    }

    SaveChange(quantity: number){

        this.QuantityBeforeSave = this.Quantity;
    }
}