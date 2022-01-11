import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA}  from '@angular/material/dialog';
import { StandardAlertInterFace } from '../models';


@Component({
  selector: 'app-standard-alert',
  templateUrl: './standard-alert.component.html',
  styleUrls: ['./standard-alert.component.scss']
})
export class StandardAlertComponent  {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: StandardAlertInterFace,
    private dialogRef: MatDialogRef<any>
  ) {}

  public closeDialog(): void {
    this.dialogRef.close(false);
  }
}
