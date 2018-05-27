import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { ProfileComponent } from '../profile/profile.component';
import { OktaCallbackComponent, OktaAuthGuard } from '@okta/okta-angular';

export const AppRoutes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: 'profile',
      component: ProfileComponent,
      canActivate: [OktaAuthGuard]
    },
    {
      path: 'implicit/callback',
      component: OktaCallbackComponent
    },
    {
      path: '**',
      component: LoginComponent
    }
  ];