import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[suChangeToUppercase]',
  providers: [],
})
export class ChangeToUppercaseDirective {
  constructor(public elementRef: ElementRef) { }
  @HostListener('input', ['$event']) onInput(event) {    
    this.elementRef.nativeElement.value = event.target.value.toUpperCase();
  }
}
