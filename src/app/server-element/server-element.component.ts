import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';



@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit , OnChanges {
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

}
