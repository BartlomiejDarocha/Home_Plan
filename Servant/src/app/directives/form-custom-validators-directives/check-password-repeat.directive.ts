import { Directive } from '@angular/core';
import { ValidatorFn, AbstractControl } from '@angular/forms';

export function checkSamePasswordCorrectValidator(passwordValue: string): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} => {
    const passwordsNotSame = passwordValue === control.value;
    return passwordsNotSame ? {'passwordsNotSame': {value: true}} : null;
  };
}

@Directive({
  selector: '[appCheckPasswordRepeat]'
})
export class CheckPasswordRepeatDirective {

  constructor() { }

}
