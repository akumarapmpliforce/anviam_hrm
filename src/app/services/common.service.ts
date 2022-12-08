import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor() {}

  userDetails() {
    let user = JSON.parse(localStorage.getItem('hrm-user')!);
    return of(user);
  }
}
