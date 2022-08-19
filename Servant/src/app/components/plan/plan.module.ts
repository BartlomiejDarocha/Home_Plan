import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MainViewContainerModule } from '../global/main-view-container/main-view-container.module';
import { UtilsModule } from '../global/utils/utils.module';
import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';



@NgModule({
  declarations: [PlanComponent],
  imports: [
    UtilsModule,
    PlanRoutingModule,
    MatSidenavModule,
    MainViewContainerModule
  ]
})
export class PlanModule { }
