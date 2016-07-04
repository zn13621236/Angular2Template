var user_list_component_1 = require('./user.list.component');
var user_detail_component_1 = require('./user.detail.component');
exports.UserRoutes = [
    {
        path: '',
        redirectTo: '/users',
        pathMatch: 'full'
    },
    { path: 'users', component: user_list_component_1.UserListComponent },
    { path: 'user/:id', component: user_detail_component_1.UserDetailComponent }
];
//# sourceMappingURL=user.routes.js.map