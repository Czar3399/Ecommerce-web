import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
    selector:"app-product",
    templateUrl: 'product.component.html',
    styles: [`
    
    `]
})
export class ProductComponent {
    @Input() Name!: string; 
    @Input() ImageUrl!: string; 
    @Input() Trademark: string = "My company"; 
    @Input() Description: string = "Some description";
    @Input() Quantity!: number;
    @Output() ChangeQuantity = new EventEmitter<number>();
}