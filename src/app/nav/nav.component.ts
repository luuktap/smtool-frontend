import { Component, ViewChild, ElementRef } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MatMenu, MatSidenav } from '@angular/material';

interface ROUTE {
  icon?: string;
  route?: string;
  title?: string;
}

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent {

  routes: ROUTE[] = [{
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
    route: '/login',
    title: 'Login'
  }];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      map(result => this.isHandset = result)
    );

    isHandset: boolean;
    @ViewChild('drawer') drawer: MatSidenav;

  constructor(private breakpointObserver: BreakpointObserver) {}

  closeDrawerIfPhone() {
    if(this.isHandset) {
      this.drawer.close()
    }
  }
}
