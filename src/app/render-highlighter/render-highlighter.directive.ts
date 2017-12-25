
import { Directive, Renderer2, OnInit, ElementRef } from '@angular/core';


@Directive({
  selector: '[appRenderHighlighter]'
})
export class RenderHighlighterDirective implements OnInit{

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }



    public ngOnInit(): void {
       this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }
}
