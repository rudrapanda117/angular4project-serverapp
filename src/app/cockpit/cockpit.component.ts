import { IServerData } from './../shared/ServerData.interface';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  @Output('serverCreated') serverCreated = new EventEmitter<IServerData>();
  @Output('blueprintCreated') blueprintCreated = new EventEmitter<IServerData>();

  newServerName = '';
  newServerContent = '';

  constructor() { }

  ngOnInit() {
  }

  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent,
    });

    console.log(nameInput.value);
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.newServerContent
    });
  }

}
