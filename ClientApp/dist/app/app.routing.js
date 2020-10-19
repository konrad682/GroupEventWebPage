"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRoutingModule = void 0;
const router_1 = require("@angular/router");
const home_1 = require("./home");
const login_1 = require("./login");
const register_1 = require("./register");
const homePage_1 = require("./homePage");
const eventListPageFootball_1 = require("./eventListPageFootball");
const formInfromation_1 = require("./formInfromation");
const formEvent_1 = require("./formEvent");
const editForm_1 = require("./editForm");
const _helpers_1 = require("./_helpers");
const eventListPageConcert_1 = require("./eventListPageConcert");
const routes = [
    { path: '', component: homePage_1.HomePageComponent },
    { path: 'home', component: home_1.HomeComponent, canActivate: [_helpers_1.AuthGuard] },
    { path: 'login', component: login_1.LoginComponent },
    { path: 'register', component: register_1.RegisterComponent },
    { path: 'formEvent/:kindEvent', component: formEvent_1.FormEventComponent, canActivate: [_helpers_1.AuthGuard] },
    { path: 'football', component: eventListPageFootball_1.EventListPageFootballComponent, canActivate: [_helpers_1.AuthGuard] },
    { path: 'concert', component: eventListPageConcert_1.EventListPageConcertComponent, canActivate: [_helpers_1.AuthGuard] },
    { path: 'formInfomation/:kindEvent/:id', component: formInfromation_1.FormInformationComponent, canActivate: [_helpers_1.AuthGuard] },
    { path: 'editForm/:kindEvent/:id', component: editForm_1.EditFormComponent, canActivate: [_helpers_1.AuthGuard] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
exports.appRoutingModule = router_1.RouterModule.forRoot(routes);
