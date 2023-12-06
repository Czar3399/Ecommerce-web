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
    @Input() Trademark!: string; 
    Quantity: number  = 0;
    QuantityBeforeSave: number  = 0;


    quantityChanged = new Subject();
    constructor(private readonly cartService: CartService) {}
    ngOnInit(): void {
        this.Quantity = this.cartService.GetQuantity(this.Id);
        this.QuantityBeforeSave = this.Quantity;
        this.quantityChanged.
        pipe(debounceTime(500))
        .subscribe(() => this.SaveChange())
    }

   
    ChangeQuantity(value: number){
        this.Quantity += value;
        this.quantityChanged.next({});
    }

    SaveChange(){
        var ChangeQuantity = this.Quantity - this.QuantityBeforeSave;
        this.cartService.ChangeProduct(this.Id, ChangeQuantity).subscribe(x => {
            this.QuantityBeforeSave = this.Quantity;
        })
    }
}