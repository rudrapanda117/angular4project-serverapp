import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2
} from '@angular/core';



@Directive({
  selector: '[appRenderHighlighter]'
})
export class RenderHighlighterDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  public ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseout(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = 'transparent';

  }
}
