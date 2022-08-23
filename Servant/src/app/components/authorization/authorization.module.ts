import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { MainViewContainerModule } from '../global/main-view-container/main-view-container.module';
import { PasswordEyeModule } from '../global/password-eye/password-eye.module';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { AuthorizationRoutingModule } from './authorization-routing.module';
import { AuthorizationComponent } from './authorization.component';
import { LoginComponent } from './login/login.component';
import { RegisteryComponent } from './registery/registery.component';



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
    MainViewContainerModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule,
    PasswordEyeModule
  ],
  exports: [
    LoginComponent,
    RegisteryComponent,
    AccountRecoveryComponent,
    MainViewContainerModule,
  ]
})
export class AuthorizationModule { }
