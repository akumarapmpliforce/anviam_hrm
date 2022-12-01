import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request);
  }
}
 // intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  //   // return next.handle(request);
  //   return this._auth.user.pipe(
  //     take(1),
  //     exhaustMap(user => {
  //       if (!user) {
  //         return next.handle(request);
  //       }
  //       const modifiedReq = request.clone({
  //         params: new HttpParams().set('auth', user.token!)
  //       })
  //       return next.handle(modifiedReq);
  //     })  
  //   )
  // }