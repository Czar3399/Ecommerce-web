import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './Pages/Products/List/product-list.component';
import { CartCheckOutComponent } from './Pages/Cart/Check-out/cart-check-out.component';
import { StoreComponent } from './store.component';

const routes: Routes = [
    {   
        path: '',
        component: StoreComponent,
        children: [
            {
                path: 'products',
                component: ProductListComponent
            },
            {
                path: 'check-out',
                component: CartCheckOutComponent
            },
        ]
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'products'
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
