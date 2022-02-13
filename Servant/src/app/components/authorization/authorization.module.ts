import { NgModule } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { SharedModule } from '../shared/shared.module';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { LoginComponent } from './login/login.component';
import { RegisteryComponent } from './registery/registery.component';
import { UserHandlerRoutingModule } from './authorization-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisteryComponent,
    AccountRecoveryComponent
  ],
  imports: [
    SharedModule,
    HeaderModule,
    FooterModule,
    UserHandlerRoutingModule,
  ],
  exports: [
    LoginComponent,
    RegisteryComponent,
    AccountRecoveryComponent
  ]
})
export class AuthorizationModule { }
