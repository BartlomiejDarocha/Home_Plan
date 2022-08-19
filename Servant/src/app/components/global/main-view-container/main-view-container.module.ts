import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { MainViewContainerComponent } from './main-view-container.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    MainViewContainerComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    MainViewContainerComponent
  ]
})
export class MainViewContainerModule { }
