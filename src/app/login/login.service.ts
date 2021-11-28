import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserToRegister } from './DTO/user-to-register.dto';
import { UserToLogin } from './DTO/user-to-login.dto';
import { map, tap } from 'rxjs';
import {UserStorageService} from "../main-app/services/user-storage.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL: string = 'http://localhost:8090';
  private corsOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':  '*',
    })
  };

  constructor(private http: HttpClient, private userStorageService: UserStorageService) {}

  registerNewUser(userInfo: UserToRegister) {
    return this.http.post(this.URL + '/user/create', userInfo, this.corsOptions).pipe(tap((user) => {
      this.userStorageService.setUserInfo(user);
    }));
  }

  login(userInfo: UserToLogin) {
    return this.http.post(this.URL + '/user/auth', userInfo, this.corsOptions).pipe(tap((user) => {
      this.userStorageService.setUserInfo(user);
    }));
  }
}
