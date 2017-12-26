import { AuthService } from './auth.service';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { CanActivateChild } from '@angular/router/src/interfaces';

@Injectable()
export class AuthGaurd implements CanActivate , CanActivateChild {

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        return this.canActivate( childRoute, state);
    }
    constructor(private authService: AuthService, private route: Router) {}


    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      return  this.authService.isAuthenticated()
        .then((authenticated: boolean) => {
            if (authenticated) {
                return true;
            } else {
                    this.route.navigate(['/']);
            }
        });
    }
}
