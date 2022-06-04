import { Directive, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Directive({
  selector: '[formsValidation]'
})
export class FormsValidationDirective implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  private formsControl = null;
  private inputs: HTMLInputElement[] = null;

  constructor(private element: ElementRef, private form: NgForm ) { }

  ngOnInit(): void {
    const formSub = this.form.ngSubmit.subscribe((ev: any ) => {
      this.formsControl = this.form.form.controls;
      console.log(this.formsControl, 'this.formsControl');
      this.checkIncorrectInputs();
      // this.getHtmlElements();
    });
    this.subs.push(formSub);
  }

  ngOnDestroy(): void {
    this.subs.filter(sub => sub).forEach(sub => sub.unsubscribe());
  }

  private checkIncorrectInputs(): { name: string, error: string }[] {
    return []
  }

  private getHtmlElements(): void {
    const htmlElements = this.element.nativeElement.elements;
    // const inputs = this.element.nativeElement.elements.filter((element: HTMLInputElement) => element.name);
    // console.log(inputs, 'inputs');

    // this.inputs =
    // console.log(htmlElements,  'this.htmlElements');
  }
}
