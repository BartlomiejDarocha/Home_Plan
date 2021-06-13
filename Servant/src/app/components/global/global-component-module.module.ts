import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderGlobalComponent } from './loader-global/loader-global.component';
import { StandardAlertComponent } from './utils/standard-alert/standard-alert.component';
import { ConfirmAlertComponent } from './utils/confirm-alert/confirm-alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SketchComponent } from './sketch/sketch.component';
import { Router, RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    LoaderGlobalComponent,
    StandardAlertComponent,
    ConfirmAlertComponent,
    SketchComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    LoaderGlobalComponent,
    StandardAlertComponent,
    ConfirmAlertComponent,
    SketchComponent
  ]
})
export class GlobalComponentModuleModule { }
