/**
 * Created by nanzhao on 7/3/16.
 */

import {Component,onInit, OnDestroy} from '@angular/core';
import { Router } from '@angular/router';
import {User, UserService} from  './user.service';
import {UserDetailComponent} from './user.detail.component';
import {UserAddComponent} from './user.add.component';
import {UserUpdateComponent} from './user.update.component';

@Component({
    selector: 'user-list',
    templateUrl: 'app/user/user.list.html',
    styleUrls: ['app/styles/user.list.component.css'],
    directives: [UserDetailComponent, UserAddComponent, UserUpdateComponent],
})
export class UserListComponent implements onInit {

    public users = [];
    private sub: any;
    private selectedId: number;
    public selectedUser:User;
    public toUpdateUser: User;

    constructor(private _userService:UserService) {
        //  this.users = this._userListService.getUsers();
    }

    ngOnInit() {
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe((params)=>{
                this.selectedId = +params['id'];

                this.users = this._userService.getUsers();
            });

    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }


    public select(user:User):void {
        this.selectedUser = user;
    }

    public selectUpdateUser(user: User):void{
        this.toUpdateUser = user;
    }

    public clearUpdate(){
        this.toUpdateUser = null;
    }

    public clearSelect(){
        this.selectedUser = null;
    }
}
