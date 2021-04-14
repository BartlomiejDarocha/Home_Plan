import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderGlobalComponent } from './loader-global/loader-global.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { StandardAlertComponent } from './utils/standard-alert/standard-alert.component';



@NgModule({
  declarations: [
    LoaderGlobalComponent,
    StandardAlertComponent
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    LoaderGlobalComponent,
    StandardAlertComponent
  ]
})
export class GlobalComponentModuleModule { }
