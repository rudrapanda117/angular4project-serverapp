import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
  Input
} from '@angular/core';




@Directive({
  selector: '[appRenderHighlighter]'
})
export class RenderHighlighterDirective implements OnInit {
  @Input('defaultColor') defaultColor = 'transparent';
  @Input('highlightColor') highlightColor = 'blue';
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {}

  @HostBinding('style.backgroundColor') backgroundColor;

  public ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseout(eventData: Event) {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    this.backgroundColor = this.defaultColor;

  }
}
