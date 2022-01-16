import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../shared/footer/footer.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoaderGlobalComponent } from './loader-global/loader-global.component';
import { LogoSpinnerComponent } from './logo-spinner/logo-spinner.component';
import { SketchComponent } from './sketch/sketch.component';

@NgModule({
  declarations: [
    LoaderGlobalComponent,
    HomeComponent,
    SketchComponent,
    LogoSpinnerComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
  ],
  exports: [
    LoaderGlobalComponent,
    SketchComponent,
    LogoSpinnerComponent
  ]
})
export class GlobalComponentModuleModule { }
