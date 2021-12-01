import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login } from 'src/app/shared/models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginData: Login): Observable<string> {
    const kanbanAuthenticationUrl = 'http://localhost:5000/login/';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const body = loginData;

    return this.http.post<string>(kanbanAuthenticationUrl, body, {
      headers: headers,
    });
  }

  isAuthenticated() {
    const token = window.localStorage.getItem('token');

    return token ? true : false;
  }
}
