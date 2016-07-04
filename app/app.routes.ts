/**
 * Created by nanzhao on 7/3/16.
 */
import { provideRouter, RouterConfig }  from '@angular/router';
//import{UserListComponent} from './user/user.list.component'
//import {UserDetailComponent} from './user/user.detail.component';
import { UserRoutes }       from './user/user.routes';

export const routes:RouterConfig = [
    ...UserRoutes,
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];