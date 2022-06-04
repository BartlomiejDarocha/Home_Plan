import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[formsValidation]'
})
export class FormsValidationDirective implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  private inputs: HTMLInputElement[] = null;

  constructor(private element: ElementRef, private form: NgForm ) { }

  ngOnInit(): void {
    const formSub = this.form.ngSubmit.subscribe((ev: any ) => {
      this.renderErrors();
    });
    this.subs.push(formSub);
  }

  ngOnDestroy(): void {
    this.subs.filter(sub => sub).forEach(sub => sub.unsubscribe());
  }

  private renderErrors(): void {
    const incorrectInputs = this.checkIncorrectInputs();
    const htmlElements = this.element.nativeElement.elements;
    if (!incorrectInputs.length || !htmlElements.length) {
      console.log('return');
      return;
    }
    console.log(incorrectInputs, 'incorrectInputs');
    console.log(htmlElements, 'htmlElements');
  }

  private checkIncorrectInputs(): { name: string, errors: any }[] {    
    const incorrectInputs = [];
    const formsControls = this.form.form.controls;
    for (const key in formsControls) {
      if (formsControls[key].status === 'INVALID') {
        const errors = formsControls[key].errors;
        incorrectInputs.push({name: key, errors});
      }
    }
    return incorrectInputs;
  }
}
