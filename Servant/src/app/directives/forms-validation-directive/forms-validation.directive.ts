import { Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AlertsErrors, CustomAlertInteface } from 'src/app/models/validations-alerts/validations-alerts';

interface IncorrectInputModel { name: string; errors: any };

@Directive({
  selector: '[formsValidation]'
})
export class FormsValidationDirective implements OnInit, OnDestroy {
  @Input() customErrors: CustomAlertInteface[] = null;
  private subs: Subscription[] = [];
  private alertsErrors = AlertsErrors;

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
    incorrectInputs.forEach((incorrectInput: IncorrectInputModel) => {      
      for (const key in incorrectInput.errors) {
        if (!this.alertsErrors[key]) {
          this.customRenderError(htmlElements[incorrectInput.name]);
        } else {
          this.renderError(htmlElements[incorrectInput.name], key, incorrectInput.errors[key]['requiredLength']);
        }
      }
    });
  }

  private customRenderError(element: HTMLInputElement) {
    const error = this.render.createElement('div');
    const elementInputName = element.name;
    const customError = this.customErrors.find((customError: CustomAlertInteface) => customError.inputName === elementInputName);
    const errorText = this.render.createText(customError.alertText);
    this.render.addClass(error, 'form_error');
    this.render.appendChild(error, errorText);
    this.render.appendChild(element.parentElement, error);
    this.render.addClass(element,'input_error');
  }

  private renderError(element: HTMLInputElement, errorKey: string, extraLengthInfo?: string): void {
    const error = this.render.createElement('div');
    const errorText = this.render.createText(extraLengthInfo ? `${this.alertsErrors[errorKey]} ${extraLengthInfo}.` : this.alertsErrors[errorKey]);
    this.render.addClass(error, 'form_error');
    this.render.appendChild(error, errorText);
    this.render.appendChild(element.parentElement, error);
    this.render.addClass(element,'input_error');
  }

  private checkIncorrectInputs(): IncorrectInputModel[] {    
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
    const inputsErrors = this.element.nativeElement.querySelectorAll('.input_error');
    const infoErrors = this.element.nativeElement.querySelectorAll('.form_error');
    infoErrors.forEach((errorElement: any) => {
      errorElement.remove();
    });
    inputsErrors.forEach((errorElement: any) => {
      this.render.removeClass(errorElement, 'input_error');
    });
  }
}
