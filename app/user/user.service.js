/**
 * Created by nanzhao on 7/3/16.
 */
/**
 * Created by nanzhao on 6/12/16.
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
var UserService = (function () {
    function UserService() {
        var _this = this;
        this.getUsers = function () {
            return _this._users;
        };
        this.findUser = function (user) {
            for (var _i = 0, _a = _this._users; _i < _a.length; _i++) {
                var usr = _a[_i];
                if (usr.userName === user.userName) {
                    return usr;
                }
            }
            return null;
        };
        this._users = [
            {
                userName: 'zn136',
                passWord: 'asdfkj',
                displayName: 'nan zhao',
                birthDate: new Date(),
            }, {
                userName: 'zn136asdf',
                passWord: 'asdfkj',
                displayName: 'nan zhao',
                gender: 'male',
                birthDate: new Date(),
            }
        ];
    }
    UserService.prototype.updateUser = function (user, userToUpdate) {
        userToUpdate.userName = user.userName ? user.userName : userToUpdate.userName;
        userToUpdate.passWord = user.passWord ? user.passWord : userToUpdate.passWord;
        userToUpdate.displayName = user.displayName ? user.displayName : userToUpdate.displayName;
        userToUpdate.gender = user.gender ? user.gender : userToUpdate.gender;
        userToUpdate.birthDate = user.birthDate ? user.birthDate : userToUpdate.birthDate;
    };
    UserService.prototype.addOrUpdateUser = function (user) {
        var existedUser = this.findUser(user);
        if (existedUser) {
            this.updateUser(user, existedUser);
        }
        else {
            this._users.push(user);
        }
    };
    UserService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map