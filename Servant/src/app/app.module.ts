import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { GlobalComponentModuleModule } from './components/global/global-component-module.module';
import { UtilsService } from './services/global-services/utils-service/utils.service';
import { AngularMaterialModule } from './angular-material.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalComponentModuleModule,
    AngularMaterialModule
  ],
  providers: [
    UtilsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
