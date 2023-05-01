import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[compFailure]'
})
export class CompFailureDirective {
  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
