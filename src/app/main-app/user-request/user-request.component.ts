import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../services/user-request.service';
import { UserStorageService } from '../services/user-storage.service';
import { UserToLogin } from '../../login/DTO/user-to-login.dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-request',
  templateUrl: './user-request.component.html',
  styleUrls: ['./user-request.component.css']
})
export class UserRequestComponent implements OnInit {
  searchQuery: any = '';

  private user: UserToLogin = null as any;

  constructor(private userRequestService: UserRequestService, private userStorageService: UserStorageService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.userStorageService.getUserInfo();
  }

  startSearch() {
    this.userRequestService.createUserRequest(this.user.email, this.searchQuery).subscribe((request) => {
      this.userRequestService.executeRequest(request.id).subscribe(() => {
        this.router.navigate(['../main-app/user-profile']);
      });
    });
  }
}
