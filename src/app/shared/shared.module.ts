import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {PasswordstrengthComponent} from '../shared/passwordstrength/passwordstrength.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PasswordstrengthComponent
  ],
  exports: [
    PasswordstrengthComponent
  ]
})

export class SharedModule { }
