import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule  } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ],
  exports: [
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule
  ]
})
export class AngularMaterialModule { }
