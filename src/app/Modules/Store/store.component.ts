import { Component } from "@angular/core";

@Component({
    template: `
        <app-store-header></app-store-header>
        <div class="container w-75 pt-4">
            <router-outlet></router-outlet>
        </div>
    `
})
export class StoreComponent {

}