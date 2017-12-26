import { CanDeactivateGaurd } from './servers/edit-server/can-deactivate-gaurd.service';
import {
  AuthGaurd
} from './auth-gaurd.service';
import {
  Routes,
  RouterModule
} from '@angular/router';
import {
  UsersComponent
} from './users/users.component';
import {
  UserComponent
} from './users/user/user.component';
import {
  ServersComponent
} from './servers/servers.component';
import {
  ServerComponent
} from './servers/server/server.component';
import {
  EditServerComponent
} from './servers/edit-server/edit-server.component';
import {
  PageNotFoundComponent
} from './page-not-found/page-not-found.component';
import {
  HomeComponent
} from './home/home.component';
import {
  NgModule
} from '@angular/core';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [{
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [{
      path: ':id/:name',
      component: UserComponent
    }]
  },
  {
    path: 'servers',
    // canActivate: [AuthGaurd],
    canActivateChild: [AuthGaurd],
    component: ServersComponent,
    children: [{
        path: ':id',
        component: ServerComponent
      },
      {
        path: ':id/edit',
        component: EditServerComponent,
        canDeactivate: [CanDeactivateGaurd]
      }
    ]
  },
  // {
  //   path: 'not-found',
  //   component: PageNotFoundComponent
  // },
  {
    path: 'not-found',
    component: ErrorPageComponent,
    data: {message: 'Page not found!'}
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}
