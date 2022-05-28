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
    FormsValidationDirectiveModule
  ],
  exports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    FormsValidationDirectiveModule
  ]
})
export class SharedModule { }
