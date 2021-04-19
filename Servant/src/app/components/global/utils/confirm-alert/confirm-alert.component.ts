import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmAlertInterFace } from '../interFaces';

@Component({
  selector: 'app-confirm-alert',
  templateUrl: './confirm-alert.component.html',
  styleUrls: ['./confirm-alert.component.scss']
})
export class ConfirmAlertComponent {
  public confirmData: ConfirmAlertInterFace = {
    header: '',
    content: '',
    confirmButton: 'Ok',
    cancelButton: 'Anuluj'
  }

  constructor(@Inject(MAT_DIALOG_DATA) public data: ConfirmAlertInterFace) {
    this.confirmData = { ...data };
  }

}
