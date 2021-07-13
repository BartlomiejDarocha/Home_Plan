import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule  } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatInputModule } from '@angular/material/input';

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule

  ],
  exports: [
    MatDialogModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatSidenavModule,
    MatInputModule
  ]
})
export class AngularMaterialModule { }


