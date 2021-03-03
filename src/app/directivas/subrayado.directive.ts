import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSubrayado]'
})
export class SubrayadoDirective {

  constructor(elemento: ElementRef) {
    elemento.nativeElement.style.textDecoration = 'underline'
   }

}
