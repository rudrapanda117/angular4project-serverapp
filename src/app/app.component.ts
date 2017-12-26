import { AccountsService } from './account.service';
import { Component , OnInit} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
 // providers: [AccountsService]
})
export class AppComponent implements OnInit {
 accounts: {name: string, status: string}[] = [];

 constructor(private accountService: AccountsService) {}

 ngOnInit() {
   this.accounts = this.accountService.accounts;
 }
}
