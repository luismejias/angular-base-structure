import { Directive, ElementRef, EventEmitter, forwardRef, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

const UPPERCASE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ChangeToUppercaseDirective),
  multi: true,
};
@Directive({
  selector: '[suChangeToUppercase]',
  providers: [UPPERCASE_VALUE_ACCESSOR],
})
export class ChangeToUppercaseDirective {
  @Input() uppercase: string;
  @Output() uppercaseChange: EventEmitter<string> = new EventEmitter<string>();
  onChange = (_: any) => {};
  onTouched = () => {};

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    elementRef.nativeElement.style.textTransform = 'uppercase';
  }

  ngOnInit() {
    this.uppercase = this.uppercase || '';
    this.format(this.uppercase);
  }

  format(value) {
    value = value.toUpperCase();
    this.uppercaseChange.next(value);
  }

  writeValue(value: any): void {
    const formatted: any = this.format(value);

    this.renderer.setAttribute(
      this.elementRef.nativeElement,
      'value',
      formatted || ''
    );
  }

  registerOnChange(fn: (value: any) => any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => any): void {
    this.onTouched = fn;
  }

}
