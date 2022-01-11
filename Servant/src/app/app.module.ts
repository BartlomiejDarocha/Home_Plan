import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { GlobalComponentModuleModule } from './components/global/global-component-module.module';
import { UtilsService } from './services/global-services/utils-service/utils.service';
import { AngularMaterialModule } from './angular-material.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/global-services/interceptor-service/interceptor.service';
import { MatDialogModule } from '@angular/material/dialog';
import { FooterComponent } from './components/global/footer/footer.component';
import { HeaderComponent } from './components/global/header/header.component';
import { LoaderGlobalComponent } from './components/global/loader-global/loader-global.component';
import { LogoSpinnerComponent } from './components/global/logo-spinner/logo-spinner.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoSpinnerComponent,
    LoaderGlobalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    GlobalComponentModuleModule,
    AngularMaterialModule,
    MatDialogModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [
    UtilsService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
