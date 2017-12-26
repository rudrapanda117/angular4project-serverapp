import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (response: Params) => {
      this.user = {
        id: response.get('id') ,
        name: response.get('name')
      };
    });

    this.user = {
      id: this.route.snapshot.params['id'] ,
      name: this.route.snapshot.params['name']
    };
  }

}
