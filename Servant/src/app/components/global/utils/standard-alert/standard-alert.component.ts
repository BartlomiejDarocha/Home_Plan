import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA}  from '@angular/material/dialog';
import { StandardAlertInterFace } from '../interFaces';


@Component({
  selector: 'app-standard-alert',
  templateUrl: './standard-alert.component.html',
  styleUrls: ['./standard-alert.component.scss']
})
export class StandardAlertComponent  {
  public standardData: StandardAlertInterFace = {
    header: '',
    content: ''
  }
  constructor(@Inject(MAT_DIALOG_DATA) private data: StandardAlertInterFace) {
    this.standardData = { ...data };
  }
}
