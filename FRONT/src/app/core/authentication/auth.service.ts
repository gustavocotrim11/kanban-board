import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  token = false; //window.localStorage.getItem('token');

  constructor() {}

  isAuthenticated() {
    return this.token ? true : false;
  }
}
