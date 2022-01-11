import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmAlertComponent } from './confirm-alert/confirm-alert.component';
import { StandardAlertComponent } from './standard-alert/standard-alert.component';



@NgModule({
  declarations: [
    StandardAlertComponent,
    ConfirmAlertComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    StandardAlertComponent,
    ConfirmAlertComponent,
  ]
})
export class UtilsModule { }
