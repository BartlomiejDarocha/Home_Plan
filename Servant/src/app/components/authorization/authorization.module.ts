import { NgModule } from '@angular/core';
import { FooterModule } from '../footer/footer.module';
import { HeaderModule } from '../header/header.module';
import { SharedModule } from '../../shared/shared.module';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { LoginComponent } from './login/login.component';
import { RegisteryComponent } from './registery/registery.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthorizationBaseComponent } from './authorization-base/authorization-base.component';



@NgModule({
  declarations: [
    LoginComponent,
    RegisteryComponent,
    AccountRecoveryComponent,
    AuthorizationComponent,
    AuthorizationBaseComponent
  ],
  imports: [
    SharedModule,
    HeaderModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule
  ],
  exports: [
    LoginComponent,
    RegisteryComponent,
    AccountRecoveryComponent
  ]
})
export class AuthorizationModule { }
