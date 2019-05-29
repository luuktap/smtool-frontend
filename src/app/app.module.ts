import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { LayoutModule } from '@angular/cdk/layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { LoginComponent } from './login/login.component';
import { GameservermanagementComponent } from './gameservermanagement/gameservermanagement.component';

import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DashboardComponent,
    UsermanagementComponent,
    LoginComponent,
    GameservermanagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
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
