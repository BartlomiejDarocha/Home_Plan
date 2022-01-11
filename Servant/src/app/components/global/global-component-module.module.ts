import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoaderGlobalComponent } from './loader-global/loader-global.component';
import { LogoSpinnerComponent } from './logo-spinner/logo-spinner.component';
import { SketchComponent } from './sketch/sketch.component';

@NgModule({
  declarations: [
    LoaderGlobalComponent,    
    HomeComponent,
    HeaderComponent,
    SketchComponent,
    FooterComponent,
    LogoSpinnerComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule
  ],
  exports: [
    LoaderGlobalComponent,
    SketchComponent,
    HeaderComponent,
    FooterComponent,
    LogoSpinnerComponent
  ]
})
export class GlobalComponentModuleModule { }
