import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    ContentChild,
    DoCheck,
    ElementRef,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
    ViewChild,
} from '@angular/core';







@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit,
 OnChanges,
  DoCheck,
   AfterContentInit,
    AfterContentChecked,
     AfterViewInit,
      AfterViewChecked,
      OnDestroy {

  @Input('srvElement') svrInputElement: {
    type: string,
    name: string,
    content: string
  };

  @Input() name: string;

  @ViewChild('heading') header: ElementRef;

  @ContentChild('contentParagrph') contentParagrph: ElementRef;


  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('onInit called');
    console.log('Text header onInit', this.header.nativeElement.textContent);
    console.log('Text contentParagrph onInit', this.contentParagrph.nativeElement.textContent);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log('changes called', changes);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('Text Content ngAfterContentInit', this.contentParagrph.nativeElement.textContent);
  }


  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }


  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    console.log('Text header ngAfterViewInit', this.header.nativeElement.textContent);
  }

  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngDestroy called');
  }
}
