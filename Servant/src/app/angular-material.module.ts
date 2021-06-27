import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule  } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSidenavModule
  ],
  exports: [
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSidenavModule
  ]
})
export class AngularMaterialModule { }


