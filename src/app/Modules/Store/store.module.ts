import { NgModule } from '@angular/core';
import { StoreComponent } from './store.component';
import { StoreRoutingModule } from './store-routing.module';
import { SharedModule } from 'src/app/Shared/shared.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { ProductListComponent } from './Pages/Products/List/product-list.component';
import { ProductComponent } from './components/Product/product.component';
import {MatChipsModule} from '@angular/material/chips';
import { HeaderComponent } from './components/Header/header.component';
import { CartCheckOutComponent } from './Pages/Cart/Check-out/cart-check-out.component';

@NgModule({
  declarations: [
    StoreComponent,
    ProductListComponent,
    ProductComponent,
    HeaderComponent,
    CartCheckOutComponent
  ],
  imports: [
    StoreRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatIconModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [StoreComponent]
})
export class StoreModule { }
