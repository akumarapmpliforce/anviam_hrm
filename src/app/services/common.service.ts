import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http:HttpClient) {}

  userDetails() {
    let user = JSON.parse(localStorage.getItem('hrm-user')!);
    return of(user);
  }

}
