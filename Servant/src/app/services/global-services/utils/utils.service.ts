import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StandardAlertInterFace } from 'src/app/components/global/utils/standard-alert/interFaces';
import { StandardAlertComponent } from 'src/app/components/global/utils/standard-alert/standard-alert.component';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor(public dialog: MatDialog) { }

  public openSimpleDialog(message: StandardAlertInterFace): void {
    this.dialog.open(StandardAlertComponent, {
      data: message
    });
  }
}
