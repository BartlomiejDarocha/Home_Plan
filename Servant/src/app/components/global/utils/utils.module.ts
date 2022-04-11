import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { SharedModule } from '../../../shared/shared.module';
import { ConfirmAlertComponent } from './confirm-alert/confirm-alert.component';
import { StandardAlertComponent } from './standard-alert/standard-alert.component';

@NgModule({
  declarations: [
    StandardAlertComponent,
    ConfirmAlertComponent,
  ],
  imports: [
    SharedModule,
    MatDialogModule,
  ],
  exports: [
    StandardAlertComponent,
    ConfirmAlertComponent,
  ]
})
export class UtilsModule { }
