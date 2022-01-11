import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoaderGlobalComponent } from './loader-global/loader-global.component';
import { SketchComponent } from './sketch/sketch.component';
import { ConfirmAlertComponent } from './utils/confirm-alert/confirm-alert.component';
import { StandardAlertComponent } from './utils/standard-alert/standard-alert.component';

@NgModule({
  declarations: [
    StandardAlertComponent,
    ConfirmAlertComponent,
    HomeComponent,
    SketchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    LoaderGlobalComponent,
    StandardAlertComponent,
    ConfirmAlertComponent,
    SketchComponent,
  ]
})
export class GlobalComponentModuleModule { }
