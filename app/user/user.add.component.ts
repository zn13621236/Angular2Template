/**
 * Created by nanzhao on 7/3/16.
 */
import {Component}  from '@angular/core';
import {User, UserService} from './user.service';
@Component({
    selector: 'user-add',
    templateUrl: 'app/user/user.add.html',
    //styleUrls: ['app/style/user.detail.component.css'],
    //directives: [MyHighlightDirective],
})

export class UserAddComponent {
    public user:User;

    constructor(private _userService:UserService) {
        this.user = {};
    }

    public addUser(user:User) {
        if(this.validateUser(user)) {
            this._userService.addOrUpdateUser(user);
        }else{
            alert('userName or password cannot be empty!');
        }
    }

    private validateUser(user: User): boolean {
        return !(!user.userName||!user.passWord);
    }

}
