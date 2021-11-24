import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppComponent } from './main-app.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { HeaderComponent } from '../header/header.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { MainAppRoutingModule } from "./main-app-routing.module";

@NgModule({
  declarations: [HeaderComponent, MainAppComponent, UserRequestComponent, SendEmailComponent],
  imports: [
    CommonModule,
    MainAppRoutingModule
  ],
  exports: [MainAppComponent]
})
export class MainAppModule { }
