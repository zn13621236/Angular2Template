/**
 * Created by nanzhao on 7/3/16.
 */
import {Component, Input}  from '@angular/core';
import {User, UserService} from './user.service';
@Component({
    selector: 'user-update',
    templateUrl: 'app/user/user.update.html',
    //styleUrls: ['app/style/user.detail.component.css'],
    //directives: [MyHighlightDirective],
})

export class UserUpdateComponent {
    @Input() user:User;

    constructor(private _userService:UserService) {
    }

    public updateUser(user:User) {
        this._userService.addOrUpdateUser(user);
    }


}