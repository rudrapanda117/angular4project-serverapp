import {
  Observable
} from 'rxjs/Observable';
import {
  ActivatedRoute,
  ParamMap,
  Router
} from '@angular/router';
import {
  Component,
  OnInit
} from '@angular/core';

import {
  ServersService
} from '../servers.service';
import {
  CanDeactivateGaurd
} from './can-deactivate-gaurd.service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateGaurd {
  server: {
    id: number,
    name: string,
    status: string
  };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved = false;

  constructor(private serversService: ServersService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {

    console.log(this.route.snapshot.queryParams);
    console.log(this.route.snapshot.fragment);

    this.allowEdit = this.route.snapshot.queryParams['allowEdit'] === '1' ? true : false;
    console.log(this.allowEdit);

    this.route.queryParamMap.subscribe((queryParams: ParamMap) => {
      console.log(queryParams);
      this.allowEdit = queryParams.get('allowEdit') === '1' ? true : false;
      console.log(this.allowEdit);
    });

    this.route.fragment.subscribe((fragment: String) => {
      console.log(fragment);
    });
    const id = +this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {
      name: this.serverName,
      status: this.serverStatus
    });

    this.changesSaved = true;
    this.router.navigate(['../'], {
      relativeTo: this.route
    });
  }


  canDeactivate(): Observable < boolean > | Promise < boolean > | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (this.serverName !== this.server.name || this.serverStatus !== this.server.status && !this.changesSaved) {
      return confirm(' Do you want to discard the changes?');
    } else {
      return true;
    }
  }
}
