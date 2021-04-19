import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmAlertComponent } from 'src/app/components/global/utils/confirm-alert/confirm-alert.component';
import { ConfirmAlertInterFace, StandardAlertInterFace } from 'src/app/components/global/utils/interFaces';
import { StandardAlertComponent } from 'src/app/components/global/utils/standard-alert/standard-alert.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public dialog: MatDialog) { }

  public openStandardAlert(message: StandardAlertInterFace): void {
    this.dialog.open(StandardAlertComponent, {
      data: message
    });
  }

  public openConfirmAlert(confirmData: ConfirmAlertInterFace): void {
    this.dialog.open(ConfirmAlertComponent, {
      data: confirmData
    });
  }
}
