import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHandlerRoutingModule } from './user-handler-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisteryComponent } from './registery/registery.component';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { SharedModule } from '../shared/shared.module';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';



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
  ]
})
export class UserHandlerModule { }
