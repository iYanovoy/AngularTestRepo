import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainAppComponent } from './main-app.component';
import { UserRequestComponent } from './user-request/user-request.component';
import { HeaderComponent } from '../header/header.component';
import { SendEmailComponent } from './send-email/send-email.component';
import { MainAppRoutingModule } from './main-app-routing.module';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRequestService } from './services/user-request.service';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
  declarations: [HeaderComponent, MainAppComponent, UserRequestComponent, SendEmailComponent, UserProfileComponent],
  imports: [
    CommonModule,
    MainAppRoutingModule,
    FormsModule,
    MatMenuModule
  ],
  providers: [UserRequestService],
  exports: [MainAppComponent]
})
export class MainAppModule { }
