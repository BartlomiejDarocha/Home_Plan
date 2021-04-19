import { Component } from '@angular/core';
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

  constructor() { }

}
