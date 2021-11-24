import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login-component/login.component';
import { SignInComponent } from './sign-in/sign-in.component';
// import { HeaderComponent } from '../header/header.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import {LoginRoutingModule} from "./login-routing.module";

@NgModule({
  declarations: [
    LoginComponent,
    SignInComponent,
    SignUpComponent,
    // HeaderComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    LoginComponent,
    // HeaderComponent
  ]
})
export class LoginModule { }
