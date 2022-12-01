import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../endpoints/api';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(object: object): Observable<any> {
    return this.http.get(apiUrl.signUp);
  }
  signin(object: object): Observable<any> {
    return this.http.get(apiUrl.signIn);
  }
}
