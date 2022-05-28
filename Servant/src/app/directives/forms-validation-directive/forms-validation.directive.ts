import { Directive, ElementRef, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Directive({
  selector: '[formsValidation]'
})
export class FormsValidationDirective implements OnInit {
  private formsControl = null;
  private inputs: HTMLInputElement[] = null;

  constructor(private element: ElementRef, private form: NgForm ) { }

  ngOnInit(): void {
    this.form.ngSubmit.subscribe((ev: any ) => {
      console.log(this.element, 'element');
      this.getHtmlElements();
      // console.log(this.form);
      this.formsControl = this.form.form.controls;
      // console.log(this.form.controls);
    });
  }

  private getHtmlElements(): void {
    const htmlElements = this.element.nativeElement.elements;
    // this.inputs =
    console.log(htmlElements,  'this.htmlElements');
  }
}
