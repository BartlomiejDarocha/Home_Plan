import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FooterModule } from '../footer/footer.module';
import { UtilsModule } from '../global/utils/utils.module';
import { HeaderModule } from '../header/header.module';
import { SharedModule } from '../shared/shared.module';
import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';



@NgModule({
  declarations: [PlanComponent],
  imports: [
    SharedModule,
    UtilsModule,
    HeaderModule,
    FooterModule,
    PlanRoutingModule,
    MatSidenavModule
  ]
})
export class PlanModule { }
