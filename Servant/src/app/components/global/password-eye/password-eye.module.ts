import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { PasswordEyeComponent } from './password-eye.component';



@NgModule({
  declarations: [PasswordEyeComponent],
  imports: [
    SharedModule
  ],
  exports: [PasswordEyeComponent]
})
export class PasswordEyeModule { }
