import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  email = new FormControl();
  password = new FormControl();
  error: string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login({email: this.email.value, passHesh: this.password.value}).subscribe(() => {
        this.router.navigate(['../../main-app/user-profile']);
    },
      ({error}) => {
        this.error = error.message;
      })
  }
}
