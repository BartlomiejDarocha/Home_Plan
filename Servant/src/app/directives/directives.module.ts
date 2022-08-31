import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsValidationDirective } from './forms-validation-directive/forms-validation.directive';
import { CheckPasswordRepeatDirective } from './form-custom-validators-directives/check-password-repeat.directive';



@NgModule({
  declarations: [FormsValidationDirective, CheckPasswordRepeatDirective],
  imports: [
    CommonModule
  ],
  exports: [FormsValidationDirective, CheckPasswordRepeatDirective]
})
export class FormsValidationDirectiveModule { }
