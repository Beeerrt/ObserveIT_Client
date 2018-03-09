import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component'
import { ValuepanelComponent } from './components/valuepanel/valuepanel.component';
import { DetailComponent } from './components/detail/detail.component';
import { NodeSettingComponent} from './components/node-setting/node-setting.component'


import { AuthGuard} from '../../guards/auth.guard';


const dashboardRoutes: Routes = [
    { path: 'dashboard',  component: DashboardComponent ,canActivate:[AuthGuard]},
    { path: 'dashboard/:id', component: DetailComponent, canActivate:[AuthGuard] },
    { path: 'dashboard/nodeSetting/:id', component: NodeSettingComponent, canActivate:[AuthGuard] }

  ];

  @NgModule({
    imports: [
      RouterModule.forChild(dashboardRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class DashboardRoutingModule { }