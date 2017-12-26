import {
  AccountsService
} from './../account.service';
import {
  Component,
  OnInit
} from '@angular/core';


@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [AccountsService]
})
export class NewAccountComponent implements OnInit {

  constructor(private accountService: AccountsService) {}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName, accountStatus);
  }

  public ngOnInit(): void {
    this.accountService.statusUpdated.subscribe((status: string) => {
      console.log(status);
    });
  }
}
