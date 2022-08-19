import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainViewContainerModule } from '../global/main-view-container/main-view-container.module';
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
    FormsModule,
    MainViewContainerModule,
    ReactiveFormsModule,
    AuthorizationRoutingModule,
  ],
  exports: [
    LoginComponent,
    RegisteryComponent,
    AccountRecoveryComponent,
    MainViewContainerModule,
  ]
})
export class AuthorizationModule { }
