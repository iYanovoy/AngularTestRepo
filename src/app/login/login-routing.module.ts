import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SignInComponent} from './sign-in/sign-in.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {LoginComponent} from './login-component/login.component';


const routes: Routes = [
  // {
    // path: '**', pathMatch: 'full', component: LoginComponent,
    // ]
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
