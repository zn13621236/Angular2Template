/**
 * Created by nanzhao on 7/3/16.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var user_service_1 = require('./user.service');
var user_detail_component_1 = require('./user.detail.component');
var user_add_component_1 = require('./user.add.component');
var user_update_component_1 = require('./user.update.component');
var UserListComponent = (function () {
    function UserListComponent(_userService) {
        this._userService = _userService;
        this.users = [];
        //  this.users = this._userListService.getUsers();
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.router
            .routerState
            .queryParams
            .subscribe(function (params) {
            _this.selectedId = +params['id'];
            _this.users = _this._userService.getUsers();
        });
    };
    UserListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    UserListComponent.prototype.select = function (user) {
        this.selectedUser = user;
    };
    UserListComponent.prototype.selectUpdateUser = function (user) {
        this.toUpdateUser = user;
    };
    UserListComponent.prototype.clearUpdate = function () {
        this.toUpdateUser = null;
    };
    UserListComponent.prototype.clearSelect = function () {
        this.selectedUser = null;
    };
    UserListComponent = __decorate([
        core_1.Component({
            selector: 'user-list',
            templateUrl: 'app/user/user.list.html',
            styleUrls: ['app/styles/user.list.component.css'],
            directives: [user_detail_component_1.UserDetailComponent, user_add_component_1.UserAddComponent, user_update_component_1.UserUpdateComponent],
        }), 
        __metadata('design:paramtypes', [user_service_1.UserService])
    ], UserListComponent);
    return UserListComponent;
})();
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=user.list.component.js.map