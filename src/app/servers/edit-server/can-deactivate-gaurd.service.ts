import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import {
  CanComponentDeactivate
} from './can-deactivate-gaurd.service';
import {
  Observable
} from 'rxjs/Observable';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable < boolean > | Promise < boolean > | boolean;
}


export class CanDeactivateGaurd implements CanComponentDeactivate {
  canDeactivate(component: CanComponentDeactivate,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot):
    Observable < boolean > | Promise < boolean > | boolean {
      return component.canDeactivate();
    }
}
