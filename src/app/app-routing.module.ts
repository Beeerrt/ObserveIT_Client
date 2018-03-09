import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { DetailComponent } from './components/dashboard/components/detail/detail.component';
import { SensordisplayComponent } from './components/dashboard/components/detail/sensordisplay/sensordisplay.component';
import { ValuepanelComponent } from './components/dashboard/components/valuepanel/valuepanel.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import {NodeSettingComponent} from './components/node-setting/node-setting.component'

import { AlterComponent } from './components/profile/alter/alter.component';
import { ProfileComponent } from './components/profile/profile.component';


import { AuthGuard} from './guards/auth.guard';
import { OnlyAdminGuard } from './guards/onlyAdmin.guard';

const appRoutes: Routes = [
    //{path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
    //{path:'detail', component: DetailComponent, canActivate:[AuthGuard]},
    {path:'register', component: RegisterComponent, canActivate:[AuthGuard,OnlyAdminGuard]},
    {path:'login', component: LoginComponent},
    {path: 'home', component: HomeComponent},
    {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
    {path:'profile/alter', component: AlterComponent, canActivate:[AuthGuard]},
    {path: 'setting', component: NodeSettingComponent, canActivate:[AuthGuard,OnlyAdminGuard]},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: '**', redirectTo: '/dashboard' }
 
 ]
 

 @NgModule({
    imports: [
      RouterModule.forRoot(
        appRoutes,
        { enableTracing: true } // <-- debugging purposes only
      )
    ],
    exports: [
      RouterModule
    ]
  })
  export class AppRoutingModule {}