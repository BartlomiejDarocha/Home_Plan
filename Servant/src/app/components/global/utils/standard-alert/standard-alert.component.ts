import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA}  from '@angular/material/dialog';
import { StandardAlertInterFace } from './interFaces';


@Component({
  selector: 'app-standard-alert',
  templateUrl: './standard-alert.component.html',
  styleUrls: ['./standard-alert.component.scss']
})
export class StandardAlertComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: StandardAlertInterFace) { }

  ngOnInit(): void {
  }

}
