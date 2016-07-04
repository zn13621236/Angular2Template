import {Component} from '@angular/core';
import { ROUTER_DIRECTIVES} from '@angular/router';

import {UserListComponent} from './user/user.list.component';
import {UserDetailComponent} from './user/user.detail.component';

import {UserService} from  './user/user.service'

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [ROUTER_DIRECTIVES, UserListComponent],
    providers: [UserService],
    precompile: [UserListComponent],
})
export class AppComponent {

}
