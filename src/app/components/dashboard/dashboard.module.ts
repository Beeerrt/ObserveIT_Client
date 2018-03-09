import { NgModule }       from '@angular/core';
import { CommonModule }   from '@angular/common';
import { FormsModule }    from '@angular/forms';
import { DashboardRoutingModule } from '../dashboard/dashboard-routing.module';
import { NgCircleProgressModule } from 'ng-circle-progress';
 
import { ValuepanelComponent } from './components/valuepanel/valuepanel.component';
import { DetailComponent } from './components/detail/detail.component';
import { DashboardComponent} from '../dashboard/dashboard.component';
import { SensordisplayComponent} from './components/detail/sensordisplay/sensordisplay.component';
import { TestComponent } from './components/detail/test/test.component';
import { NodeSettingComponent } from './components/node-setting/node-setting.component';
 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DashboardRoutingModule,
    NgCircleProgressModule
  ],
  declarations: [
    DashboardComponent,
      ValuepanelComponent,
      DetailComponent,
      SensordisplayComponent,
      TestComponent,
      NodeSettingComponent
  ],
  providers: [ ]
})
export class DashboardModule {}