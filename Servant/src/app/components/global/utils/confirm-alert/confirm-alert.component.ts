import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmAlertInterFace } from '../models';

@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.scss']
})
export class ConfirmAlertComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmAlertInterFace,
    private dialogRef: MatDialogRef<any>
  ) {}

  public closeDialog(): void {
    this.dialogRef.close(false);
  }

}
