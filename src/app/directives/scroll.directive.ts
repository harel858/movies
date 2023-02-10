import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[scroll]',
})
export class ScrollDirective {
  @HostBinding(`container.scrolled`) isScrolled = false;

  @HostListener('window:scroll') onWindowScroll() {
    console.log(`hey`);

    this.isScrolled = window.scrollY > 0;
  }
}
