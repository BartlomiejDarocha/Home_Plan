import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[formsValidation]'
})
export class FormsValidationDirective implements OnInit, OnDestroy {
  private subs: Subscription[] = [];

  constructor(
    private element: ElementRef,
    private form: NgForm,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
    const formSub = this.form.ngSubmit.subscribe(() => {
      this.resetErrors();
      this.setErrors();
    });
    this.subs.push(formSub);
  }

  ngOnDestroy(): void {
    this.subs.filter(sub => sub).forEach(sub => sub.unsubscribe());
  }

  private setErrors(): void {
    const incorrectInputs = this.checkIncorrectInputs();
    const htmlElements: HTMLInputElement[] = this.element.nativeElement.elements;
    if (!incorrectInputs.length || !htmlElements.length) {
      return;
    }
    incorrectInputs.forEach((incorrectInput: { name: string, errors: any }) => {      
      if(!htmlElements[incorrectInput.name]) {
        return;
      }
      this.renderError(htmlElements[incorrectInput.name]);
    });
  }

  private renderError(element: HTMLInputElement): void {
    const error = this.render.createElement('div');
    const errorText = this.render.createText('E-mail jest wymagany');
    this.render.addClass(error, 'form_error');
    this.render.appendChild(error, errorText);
    this.render.appendChild(element.parentElement, error);
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

  private resetErrors(): void {
    const allReadyErrors = this.element.nativeElement.querySelectorAll('.form_error');
    allReadyErrors.forEach((errorElement: any) => {
      errorElement.remove();
    })
  }
}
