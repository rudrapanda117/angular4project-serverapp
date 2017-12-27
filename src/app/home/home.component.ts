import { Observer } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { setTimeout } from 'timers';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {

    const numberObservable = Observable.interval(1000);
    this.numberObsSubscription = numberObservable.subscribe(
      (number: number) => {
        console.log(number);
      }
    );

    const myObservable = Observable.create( (observer: Observer<string>) => {
      setTimeout(
        () => {
          observer.next('first package');
        }, 2000
      );

      setTimeout(
        () => {
          observer.next('second package');
        }, 4000
      );

      // setTimeout(
      //   () => {
      //     observer.error('this does not work');
      //   }, 5000
      // );

      setTimeout(
          () => {
            observer.complete();
          }, 5000
        );

    });

   this.customObsSubscription =  myObservable.subscribe(
      (data: string) => {
        console.log(data);
      },
      (error: string) => {
        console.log(error);
      },
      () => {
        console.log('completed');
      }
    );

  }


    public ngOnDestroy(): void {
        this.numberObsSubscription.unsubscribe();
        this.customObsSubscription.unsubscribe();
    }
}
