import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login-component/login.component';
import { MainAppComponent } from './main-app/main-app.component';
import {SignInComponent} from "./login/sign-in/sign-in.component";
import {SignUpComponent} from "./login/sign-up/sign-up.component";
import {SendEmailComponent} from "./main-app/send-email/send-email.component";
import {UserRequestComponent} from "./main-app/user-request/user-request.component";
import {UserProfileComponent} from "./main-app/user-profile/user-profile.component";

const routes: Routes = [
  {
    path: 'login', component: LoginComponent, children: [
      {
        path: 'sign-in',
        component: SignInComponent
      },
      {
        path: 'sign-up',
        component: SignUpComponent
      },
    ]
  },
  {path: 'main-app', component: MainAppComponent, children: [
      {
        path: 'send-email',
        component: SendEmailComponent
      },
      {
        path: 'user-request',
        component: UserRequestComponent
      },
      {
        path: 'user-profile',
        component: UserProfileComponent
      },
    ]},
  {path: '**', redirectTo: '/login/sign-in', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
