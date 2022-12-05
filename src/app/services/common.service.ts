import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../endpoints/api';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  // sample api use 
  // getCountry(object: any = null): Observable<any> {
  //   return this.http.get(apiUrl.Country);
  // }
  getImageVideo(){
    return this.http.get('./assets/json/data.json')
  }

  getEventDetails(){
    return this.http.get('./assets/json/event.json')
  }
}
