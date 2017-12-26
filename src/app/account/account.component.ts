import { AccountsService } from './../account.service';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
 // providers: [AccountsService]
})
export class AccountComponent {

constructor( private accountService: AccountsService) {}

  @Input() account: {name: string, status: string};
  @Input() id: number;



  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    this.accountService.statusUpdated.emit(status);
  }
}
