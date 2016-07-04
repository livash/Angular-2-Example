import { provideRouter, RouterConfig }  from '@angular/router';
import { PeopleComponent } from './people.component';
import { DashboardComponent } from './dashboard.component';

const routes: RouterConfig = [
  {
    path: 'people',
    component: PeopleComponent
  },
  {
      path: 'dashboard',
      component: DashboardComponent
  },
  {
      path: '',
      redirectTo: '/dashboard'
  }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];