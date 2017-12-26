import { AuthService } from './auth.service';

import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGaurd implements CanActivate {
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
