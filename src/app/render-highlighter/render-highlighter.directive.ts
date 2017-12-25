
import { Directive, Renderer2, OnInit, ElementRef, HostListener } from '@angular/core';



@Directive({
  selector: '[appRenderHighlighter]'
})
export class RenderHighlighterDirective implements OnInit {

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }



    public ngOnInit(): void {
       // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseenter') mouseenter( eventData: Event) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseleave') mouseout( eventData: Event) {
      this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'white');
    }
}
