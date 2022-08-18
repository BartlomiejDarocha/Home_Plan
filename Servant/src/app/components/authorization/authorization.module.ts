import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { LoginComponent } from './login/login.component';
import { RegisteryComponent } from './registery/registery.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisteryComponent,
    AccountRecoveryComponent,
    AuthorizationComponent
  ],
  imports: [
    SharedModule,
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
