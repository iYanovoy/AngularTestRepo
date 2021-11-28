import { Component, OnInit } from '@angular/core';
import {UserStorageService} from "../main-app/services/user-storage.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  email: string = '';

  constructor(private userStorageService: UserStorageService) { }

  ngOnInit(): void {
    const user = this.userStorageService.getUserInfo();

    if(user) {
      this.email = user.email;
    }
  }

}
