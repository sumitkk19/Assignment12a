import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[compSuccess]'
})
export class CompSuccessDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('green');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
