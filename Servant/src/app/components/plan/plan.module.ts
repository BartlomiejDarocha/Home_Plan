import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { UtilsModule } from '../global/utils/utils.module';
import { SharedModule } from '../../shared/shared.module';
import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';



@NgModule({
  declarations: [PlanComponent],
  imports: [
    SharedModule,
    UtilsModule,
    PlanRoutingModule,
    MatSidenavModule
  ]
})
export class PlanModule { }
