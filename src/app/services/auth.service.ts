import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { apiUrl } from '../endpoints/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  userLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {}

  signup(payload: object): Observable<any> {
    return this.http.get(apiUrl.signUp, payload);
  }

  signin(): Observable<any> {
    return this.http.get('./assets/json/users.json');
  }

  logOut() {
    localStorage.removeItem('hrm-user');
    localStorage.removeItem('token');
    this.router.navigate(['auth/login']);
  }

  //Check If user is logged In
  checkLoggedIn() {
    let token = localStorage.getItem('token');
    let user = localStorage.getItem('hrm-user');
    return token && user ? true : false;
  }
}
