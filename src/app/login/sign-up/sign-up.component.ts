import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  email = new FormControl();
  userName = new FormControl();
  password = new FormControl();
  error: string = '';

  constructor(private loginService: LoginService, private router: Router) {
  }

  ngOnInit(): void {
  }

  signUp() {
    this.loginService.registerNewUser({
      email: this.email.value,
      password: this.password.value,
      userName: this.userName.value,
    })
      .subscribe((response) => {
        if (response) {
          this.router.navigate(['../../main-app/user-profile']);
        }
      },
      (error) =>{
        this.error = error;
      })
  }

}
