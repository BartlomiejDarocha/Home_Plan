import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoaderGlobalComponent } from './loader-global/loader-global.component';
import { SketchComponent } from './sketch/sketch.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoaderGlobalComponent,
    HomeComponent,
    SketchComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LoaderGlobalComponent,
    SketchComponent,
  ]
})
export class GlobalComponentModuleModule { }
