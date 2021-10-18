import { ElementRef, Renderer2 } from '@angular/core';
import { MockService } from 'ng-mocks';
import { ChangeToUppercaseDirective } from './change-to-uppercase.directive';

describe('ChangeToUppercaseDirective', () => {
  let renderer: Renderer2;
  let nativeElement: ElementRef;
  let directive: ChangeToUppercaseDirective;
  beforeEach(() => {
    renderer = MockService(Renderer2);
    nativeElement = MockService(ElementRef,{
      nativeElement: {
        style: {
          textTransform: 'uppercase'
        }
      }
    });
    directive = new ChangeToUppercaseDirective(renderer, nativeElement);
  })
  it('should create an instance', () => {    
    expect(directive).toBeTruthy();
  });
});
