import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    loadChildren: () => import("./Modules/Store/store.module").then(x => x.StoreModule)
  },
  {
    path: 'auth',
    loadChildren: () => import("./Modules/Auth/auth.module").then(x => x.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
