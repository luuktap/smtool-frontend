import { Component, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenu } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';

import { User } from 'src/app/interfaces/user';
import { NavRoute } from 'src/app/interfaces/nav-route';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {

  constructor(
    private breakpointObserver: BreakpointObserver,
    public AuthService: AuthService
  ) {}

  routes: NavRoute[] = [{
    icon: 'dashboard',
    route: '/dashboard',
    title: 'Dashboard'
  },
  {
    icon: 'account_circle',
    route: '/user-management',
    title: 'User Management'
  },
  {
    icon: 'account_circle',
    route: '/auth/login',
    title: 'Login'
  }];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      map(result => this.isHandset = result)
    );
  
  isHandset: boolean;
  @ViewChild('drawer', { static: false }) drawer: MatSidenav;

  closeDrawerIfPhone() {
    if(this.isHandset) {
      this.drawer.close()
    }
  }
}
