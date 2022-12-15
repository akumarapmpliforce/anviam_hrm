import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService : AuthService,private router : Router){
    
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree>| boolean | UrlTree {

      let Token = localStorage.getItem('token');

      if(Token && Token.length > 0){
        return true;
      }
      else{
        return this.router.createUrlTree(['login']);
      }
  }
   
}

// @Injectable({
//   providedIn: 'root',
// })
// export class LoginGuard implements CanActivate {

//   constructor(private authService : AuthService,private router : Router){
    
//   }

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree>| boolean | UrlTree {
//       debugger
//       let Token = localStorage.getItem('token');

//       if(Token && Token.length > 0){
//         return this.router.navigateByUrl('admin/dashboard');
//       }
//       else{
//         return this.router.navigateByUrl('auth/login');
//       }

//   }
   
// }