/**
 * Created by nanzhao on 7/3/16.
 */
import {Component, Input}  from '@angular/core';
import {User} from './user.service';
import { MyHighlightDirective } from '../directives/myHighlight';
@Component({
    selector: 'user-detail',
    templateUrl: 'app/user/user.detail.html',
    styleUrls: ['app/styles/user.detail.component.css'],
    directives: [MyHighlightDirective],
})
export class UserDetailComponent {
    @Input() active_user:User;

}
