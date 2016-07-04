var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by nanzhao on 7/3/16.
 */
var core_1 = require('@angular/core');
var myHighlight_1 = require('../directives/myHighlight');
var UserDetailComponent = (function () {
    function UserDetailComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], UserDetailComponent.prototype, "active_user", void 0);
    UserDetailComponent = __decorate([
        core_1.Component({
            selector: 'user-detail',
            templateUrl: 'app/user/user.detail.html',
            styleUrls: ['app/styles/user.detail.component.css'],
            directives: [myHighlight_1.MyHighlightDirective],
        }), 
        __metadata('design:paramtypes', [])
    ], UserDetailComponent);
    return UserDetailComponent;
})();
exports.UserDetailComponent = UserDetailComponent;
//# sourceMappingURL=user.detail.component.js.map