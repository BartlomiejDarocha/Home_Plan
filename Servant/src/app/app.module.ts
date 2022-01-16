import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalComponentModuleModule } from './components/global/global-component-module.module';
import { UtilsModule } from './components/global/utils/utils.module';
import { SharedModule } from './components/shared/shared.module';
import { InterceptorService } from './services/global-services/interceptor-service/interceptor.service';
import { UtilsService } from './services/global-services/utils-service/utils.service';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    UtilsModule,
    GlobalComponentModuleModule,
    AngularMaterialModule,
    HttpClientModule
  ],
  providers: [
    UtilsService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
