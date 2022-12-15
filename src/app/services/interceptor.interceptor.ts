import { AuthGuard } from './../guard/auth.guard';
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

  intercept(request: HttpRequest<unknown>, next: HttpHandler):  Observable<HttpEvent<unknown>> {
    
    const Token = localStorage.getItem('token');
    if(Token && Token.length > 0){
      const header = {
        Authorization: `Bearer ${Token}`,
      };

      request = request.clone({
        setHeaders: header
      });
    
    }
    return next.handle(request);
  }
}


// intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
//   const currentAuthToken = this.localstorage.currentAuthTokenValue;
//   if (currentAuthToken && currentAuthToken.length > 0) {
//     const headers = {
//       Authorization: `Bearer ${currentAuthToken}`,
//       contentType: "application/json"
//     };
//     request = request.clone({
//       setHeaders: headers
//     });
//   }
//   return next.handle(request);
// }



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

