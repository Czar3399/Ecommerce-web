import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './Pages/Signin/Signin.component';

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [SigninComponent]
})
export class AuthModule { }
