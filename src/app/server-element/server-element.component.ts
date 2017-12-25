import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    Component,
    DoCheck,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    SimpleChanges,
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


  constructor() {
    console.log('constructor called');
  }

  ngOnInit() {
    console.log('onInit called');
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
  }


  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }


  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  public ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('ngDestroy called');
  }
}
