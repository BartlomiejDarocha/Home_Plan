import { NgModule } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { SharedModule } from '../shared/shared.module';
import { PlanRoutingModule } from './plan-routing.module';
import { PlanComponent } from './plan.component';



@NgModule({
  declarations: [PlanComponent],
  imports: [
    SharedModule,
    HeaderModule,
    FooterModule,
    PlanRoutingModule
  ]
})
export class PlanModule { }
