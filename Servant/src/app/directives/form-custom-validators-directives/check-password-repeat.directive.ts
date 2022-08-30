import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

export function checkSamePasswordCorrectValidator(passwordValue: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const passwordsNotSame = passwordValue === control.value;
    return passwordsNotSame ? {'passwordsNotSame': {value: true}} : null;
  };
}

@Directive({
  selector: '[appCheckPasswordRepeat]',
  providers: [{provide: NG_VALIDATORS, useExisting: 
  CheckPasswordRepeatDirective, multi: true}]
})
export class CheckPasswordRepeatDirective implements Validator {
  @Input('passwordValue') passwordValue: string;

  validate(control: AbstractControl): {[key: string]: any} {
    return this.passwordValue ? checkSamePasswordCorrectValidator(this.passwordValue)(control): null;
  }
}
