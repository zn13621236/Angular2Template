/**
 * Created by nanzhao on 7/3/16.
 */
import { RouterConfig }          from '@angular/router';
import{UserListComponent} from './user.list.component'
import {UserDetailComponent} from './user.detail.component';


export const UserRoutes: RouterConfig = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    { path: 'users',  component: UserListComponent},
    { path: 'user/:id', component: UserDetailComponent }
];
