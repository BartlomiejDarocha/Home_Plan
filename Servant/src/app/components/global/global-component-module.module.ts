import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoaderGlobalComponent } from './loader-global/loader-global.component';
import { MainViewContainerComponent } from './main-view-container/main-view-container.component';
import { SketchComponent } from './sketch/sketch.component';

@NgModule({
  declarations: [
    LoaderGlobalComponent,
    HomeComponent,
    SketchComponent,
    FooterComponent,
    HeaderComponent,
    MainViewContainerComponent
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    LoaderGlobalComponent,
    SketchComponent,
    FooterComponent,
    HeaderComponent,
    MainViewContainerComponent
  ]
})
export class GlobalComponentModuleModule { }
