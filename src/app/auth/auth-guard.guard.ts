import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router,CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Route } from '@angular/compiler/src/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private http:HttpClient,
              private router : Router,
              private authService:AuthService){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):boolean {
      const url: string = state.url;
      return this.checkLogin(url)
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  
  checkLogin(url: string)
  {
     if(this.authService.isLoggedIn())
     {
       return true;
     }
     this.authService.redirectUrl=url;
     this.router.navigate(['/login'],{queryParams: { returnUrl: url }})
  }
}
