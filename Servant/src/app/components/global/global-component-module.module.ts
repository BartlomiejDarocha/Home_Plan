import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoaderGlobalComponent } from './loader-global/loader-global.component';
import { SketchComponent } from './sketch/sketch.component';

@NgModule({
  declarations: [
    LoaderGlobalComponent,
    HomeComponent,
    SketchComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LoaderGlobalComponent,
    SketchComponent,
  ]
})
export class GlobalComponentModuleModule { }
