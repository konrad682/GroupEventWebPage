"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var home_1 = require("./home");
var login_1 = require("./login");
var register_1 = require("./register");
var homePage_1 = require("./homePage");
var eventListPageFootball_1 = require("./eventListPageFootball");
var formInfromation_1 = require("./formInfromation");
var formEvent_1 = require("./formEvent");
var editForm_1 = require("./editForm");
var _helpers_1 = require("./_helpers");
var routes = [
    { path: '', component: homePage_1.HomePageComponent },
    { path: 'home', component: home_1.HomeComponent, canActivate: [_helpers_1.AuthGuard] },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'register', component: register_1.RegisterComponent },
    { path: 'formEvent/:kindEvent', component: formEvent_1.FormEventComponent, canActivate: [_helpers_1.AuthGuard] },
    { path: 'football', component: eventListPageFootball_1.EventListPageFootballComponent, canActivate: [_helpers_1.AuthGuard] },
    { path: 'formInfomation/:kindEvent/:id', component: formInfromation_1.FormInformationComponent, canActivate: [_helpers_1.AuthGuard] },
    { path: 'editForm/:kindEvent/:id', component: editForm_1.EditFormComponent, canActivate: [_helpers_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.appRoutingModule = router_1.RouterModule.forRoot(routes);
