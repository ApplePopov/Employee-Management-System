import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {ValidateService} from './services/validate.service';
import {AuthService} from './services/auth.service';
import {FlashMessagesModule} from 'angular2-flash-messages';
import {AuthGuard} from './guards/auth.guard';
import {PassGuard} from './guards/pass.guard';

import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { ForgotConfirmationComponent } from './components/forgot-confirmation/forgot-confirmation.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { PasswordChangedComponent } from './components/password-changed/password-changed.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/templates/header/header.component';
import { EmsHeaderComponent } from './components/templates/ems-header/ems-header.component';
import { EmsDashboardComponent } from './components/ems-dashboard/ems-dashboard.component';
import { AdminNotificationComponent } from './components/admin/admin-notification/admin-notification.component';
import { AdminPanelComponent } from './components/admin/admin-panel/admin-panel.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { RmsDashboardComponent } from './components/rms-dashboard/rms-dashboard.component';
import { SmsDashboardComponent } from './components/sms-dashboard/sms-dashboard.component';
import { BisDashboardComponent } from './components/bis-dashboard/bis-dashboard.component';

const appRoutes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path: 'forgotPassword', component: ForgotPasswordComponent},
  {path: 'forgotConfirmation', component: ForgotConfirmationComponent, canActivate:[PassGuard]},
  {path: 'changePassword', component: ChangePasswordComponent, canActivate:[PassGuard]},
  {path: 'passwordChanged', component: PasswordChangedComponent, canActivate:[PassGuard]},
  {path: 'home', component: HomeComponent, canActivate:[AuthGuard]},
  {path: 'ems_dashboard', component: EmsDashboardComponent, canActivate:[AuthGuard]},
  {path: 'admin_notification', component: AdminNotificationComponent, canActivate:[AuthGuard]},
  {path: 'admin_panel', component: AdminPanelComponent, canActivate:[AuthGuard]},
  {path: 'view_profile', component: ViewProfileComponent, canActivate:[AuthGuard]},
  {path: 'rms_dashboard', component: RmsDashboardComponent, canActivate:[AuthGuard]},
  {path: 'sms_dashboard', component: SmsDashboardComponent, canActivate:[AuthGuard]},
  {path: 'bis_dashboard', component: BisDashboardComponent, canActivate:[AuthGuard]}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    ForgotConfirmationComponent,
    ChangePasswordComponent,
    PasswordChangedComponent,
    HomeComponent,
    HeaderComponent,
    EmsHeaderComponent,
    EmsDashboardComponent,
    AdminNotificationComponent,
    AdminPanelComponent,
    ViewProfileComponent,
    RmsDashboardComponent,
    SmsDashboardComponent,
    BisDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot()
  ],
  providers: [ValidateService, AuthService, AuthGuard, PassGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
