import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserStorageService {
  private user: any;

  constructor() { }

  setUserInfo(userInfo: any) {
    this.user = userInfo;
    localStorage.setItem('user', JSON.stringify(userInfo));
  }

  getUserInfo() {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      return JSON.parse(storedUser);
    }
    return this.user;
  }
}
