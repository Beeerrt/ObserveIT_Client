import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { ProfileRoutingModule} from '../profile/profile-routing.module'
import { SharedModule} from '../../shared/shared.module'

import { ProfileComponent } from '../profile/profile.component';
import { AlterComponent } from '../profile/alter/alter.component';



 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    AlterComponent,

  ],
  providers: [ ]
})
export class ProfileModule {}