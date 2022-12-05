import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../endpoints/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(payload: object): Observable<any> {
    return this.http.get(apiUrl.signUp, payload);
  }
  signin(): Observable<any> {
    return this.http.get('./assets/json/users.json');
  }
}
