import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsValidationDirective } from './forms-validation-directive/forms-validation.directive';



@NgModule({
  declarations: [FormsValidationDirective],
  imports: [
    CommonModule
  ],
  exports: [FormsValidationDirective]
})
export class FormsValidationDirectiveModule { }
