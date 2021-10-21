import { AfterViewChecked, AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appBox]'
})
export class BoxDirective implements AfterViewChecked {

  @Input()
  borderColor: string = 'black';

  @Input()
  borderThickness: string = '1px';

  @Input()
  borderPattern: string = 'solid';

  @Input()
  borderRadius: string = '0px';

  constructor(private elem: ElementRef) {
  }

  ngAfterViewChecked(): void {
    this.elem.nativeElement.style.border = `${this.borderThickness} ${this.borderPattern} ${this.borderColor}`;
    this.elem.nativeElement.style.borderRadius = this.borderRadius;
  }


}
