import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './Pages/Signin/Signin.component';

const routes: Routes = [
    {
        path: 'signin',
        component: SigninComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'signin'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class StoreRoutingModule { }
