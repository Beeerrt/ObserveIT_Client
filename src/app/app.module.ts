import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {HttpModule} from '@angular/http';
import { FlashMessagesModule} from 'angular2-flash-messages';
import { AppRoutingModule } from './app-routing.module';
import { ProfileModule } from '../app/components/profile/profile.module';
import { DashboardModule } from '../app/components/dashboard/dashboard.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SharedModule } from '../app/shared/shared.module'

//import { PasswordStrengthBarComponent  } from 'ng2-password-strength-bar';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';

import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import {ShareDataService  } from './services/share-data.service';
import { ValuepanelComponent } from './components/dashboard/components/valuepanel/valuepanel.component';
import { AuthGuard} from './guards/auth.guard';
import { OnlyAdminGuard } from './guards/onlyAdmin.guard';
import { DetailComponent } from './components/dashboard/components/detail/detail.component';
import { SensordisplayComponent } from './components/dashboard/components/detail/sensordisplay/sensordisplay.component';
import { AlterComponent } from './components/profile/alter/alter.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,

  ],
  imports: [
    BrowserModule,
    DashboardModule,
    ProfileModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    FlashMessagesModule.forRoot(),
    NgCircleProgressModule.forRoot({
      // set defaults 
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      animationDuration: 300,
    }),
    SharedModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    ShareDataService,
    OnlyAdminGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
