import { Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[formsValidation]'
})
export class FormsValidationDirective implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  private inputs: HTMLInputElement[] = null;

  constructor(
    private element: ElementRef,
    private form: NgForm,
    private render: Renderer2
  ) { }
  // parentElement

  ngOnInit(): void {
    const formSub = this.form.ngSubmit.subscribe((ev: any ) => {
      this.setErrors();
    });
    this.subs.push(formSub);
  }

  ngOnDestroy(): void {
    this.subs.filter(sub => sub).forEach(sub => sub.unsubscribe());
  }

  private setErrors(): void {
    const incorrectInputs = this.checkIncorrectInputs();
    const htmlElements = this.element.nativeElement.elements;
    if (!incorrectInputs.length || !htmlElements.length) {
      return;
    }
    console.log(htmlElements, 'htmlElements');
    incorrectInputs.forEach((incorrectInput: { name: string, errors: any }) => {      
      if(!htmlElements[incorrectInput.name]) {
        return;
      }
      console.log(htmlElements[incorrectInput.name], 'pokazanie tego inputa');
      this.renderError();
    });
  }

  private renderError(): void {
    const error = this.render.createElement('div');
    console.log(error, 'error');
    // <div *ngIf="email.hasError('required') && email.touched" class="form_error">E-mail jest wymagany</div> -->
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
