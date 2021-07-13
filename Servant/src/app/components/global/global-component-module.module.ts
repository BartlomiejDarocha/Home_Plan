import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderGlobalComponent } from './loader-global/loader-global.component';
import { StandardAlertComponent } from './utils/standard-alert/standard-alert.component';
import { ConfirmAlertComponent } from './utils/confirm-alert/confirm-alert.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { SketchComponent } from './sketch/sketch.component';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';




@NgModule({
  declarations: [
    LoaderGlobalComponent,
    StandardAlertComponent,
    ConfirmAlertComponent,
    HomeComponent,
    HeaderComponent,
    SketchComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    LoaderGlobalComponent,
    StandardAlertComponent,
    ConfirmAlertComponent,
    SketchComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class GlobalComponentModuleModule { }
