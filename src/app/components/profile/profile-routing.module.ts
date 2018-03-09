import { NgModule }       from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from '../profile/profile.component';
import { AlterComponent } from '../profile/alter/alter.component';


import { AuthGuard} from '../../guards/auth.guard';


const profileRoutes: Routes = [
    { path: 'profile',  component: ProfileComponent ,canActivate:[AuthGuard]},
    { path: 'profile/alter', component: AlterComponent, canActivate:[AuthGuard] }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(profileRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class ProfileRoutingModule { }