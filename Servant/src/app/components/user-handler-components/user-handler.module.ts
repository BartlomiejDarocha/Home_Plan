import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHandlerRoutingModule } from './user-handler-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisteryComponent } from './registery/registery.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';



@NgModule({
  declarations: [LoginComponent, RegisteryComponent, AccountRecoveryComponent],
  imports: [
    CommonModule,
    UserHandlerRoutingModule
  ]
})
export class UserHandlerModule { }
