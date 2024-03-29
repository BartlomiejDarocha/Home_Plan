import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountRecoveryComponent } from './account-recovery/account-recovery.component';
import { AuthorizationComponent } from './authorization.component';
import { LoginComponent } from './login/login.component';
import { RegisteryComponent } from './registery/registery.component';

const routes: Routes = [
  {
    path: '',
    component: AuthorizationComponent,
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'registery',
        component: RegisteryComponent
      },
      {
        path: 'account-recovery',
        component: AccountRecoveryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthorizationRoutingModule { }
