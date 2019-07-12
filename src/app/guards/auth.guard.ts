import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private AuthService: AuthService,
    private router: Router
  ) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    console.log('AuthGuard#canActivate called');
    console.log(next);
    console.log(state);
    if(state.url.startsWith('/auth')) {
      if(this.AuthService.isAuthenticated()) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
    return true;
  }

  canLoad(route: Route): boolean {
      console.log('AuthGuard#canLoad called');
      console.log(route)
      if(this.AuthService.isAuthenticated()) {
        return true;
      }
      this.router.navigate(['/auth/login']);
  }
}
