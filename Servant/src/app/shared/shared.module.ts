import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { FormsValidationDirectiveModule } from '../directives/directives.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsValidationDirectiveModule // czemu to to w ogole jest??
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsValidationDirectiveModule // czemu to to w ogole jest??
  ]
})
export class SharedModule { }
