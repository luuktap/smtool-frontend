import {
  BrowserModule
} from '@angular/platform-browser';
import {
  NgModule,
  APP_INITIALIZER
} from '@angular/core';
import {
  LayoutModule
} from '@angular/cdk/layout';
import {
  BrowserAnimationsModule
} from '@angular/platform-browser/animations';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import {
  HttpClientModule
} from '@angular/common/http';

import {
  AppRoutingModule
} from './app-routing.module';

import {
  AppComponent
} from './app.component';
import {
  NavComponent
} from './nav/nav.component';

import {
  MatToolbarModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatProgressSpinnerModule
} from '@angular/material';
import {
  DashboardComponent
} from './dashboard/dashboard.component';
import {
  UsermanagementComponent
} from './usermanagement/usermanagement.component';
import {
  LoginComponent
} from './login/login.component';

import {
  AuthService
} from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    UsermanagementComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: startApp,
    deps: [AuthService],
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}

export function startApp(auth: AuthService) {
  return () => auth.requestUser();
}
