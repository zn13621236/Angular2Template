/**
 * Created by nanzhao on 7/3/16.
 */
var router_1 = require('@angular/router');
//import{UserListComponent} from './user/user.list.component'
//import {UserDetailComponent} from './user/user.detail.component';
var user_routes_1 = require('./user/user.routes');
exports.routes = user_routes_1.UserRoutes.slice();
exports.APP_ROUTER_PROVIDERS = [
    router_1.provideRouter(exports.routes)
];
//# sourceMappingURL=app.routes.js.map