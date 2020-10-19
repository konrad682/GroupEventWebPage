"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const forms_1 = require("@angular/forms");
const http_1 = require("@angular/common/http");
const app_routing_1 = require("./app.routing");
const _helpers_1 = require("./_helpers");
const app_component_1 = require("./app.component");
const home_1 = require("./home");
const homePage_1 = require("./homePage");
const eventListPageFootball_1 = require("./eventListPageFootball");
const eventListPageConcert_1 = require("./eventListPageConcert");
const formEvent_1 = require("./formEvent");
const login_1 = require("./login");
const register_1 = require("./register");
const formInfromation_1 = require("./formInfromation");
const _components_1 = require("./_components");
const editForm_1 = require("./editForm");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            http_1.HttpClientModule,
            app_routing_1.appRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            home_1.HomeComponent,
            login_1.LoginComponent,
            register_1.RegisterComponent,
            _components_1.AlertComponent,
            homePage_1.HomePageComponent,
            formEvent_1.FormEventComponent,
            formInfromation_1.FormInformationComponent,
            eventListPageConcert_1.EventListPageConcertComponent,
            editForm_1.EditFormComponent,
            eventListPageFootball_1.EventListPageFootballComponent
        ],
        providers: [
            { provide: http_1.HTTP_INTERCEPTORS, useClass: _helpers_1.JwtInterceptor, multi: true },
            { provide: http_1.HTTP_INTERCEPTORS, useClass: _helpers_1.ErrorInterceptor, multi: true },
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
