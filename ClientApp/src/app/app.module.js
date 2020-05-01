"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
var app_routing_1 = require("./app.routing");
var _helpers_1 = require("./_helpers");
var app_component_1 = require("./app.component");
var home_1 = require("./home");
var homePage_1 = require("./homePage");
var eventListPageFootball_1 = require("./eventListPageFootball");
var formEvent_1 = require("./formEvent");
var login_1 = require("./login");
var register_1 = require("./register");
var _components_1 = require("./_components");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
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
                eventListPageFootball_1.EventListPageFootballComponent
            ],
            providers: [
                { provide: http_1.HTTP_INTERCEPTORS, useClass: _helpers_1.JwtInterceptor, multi: true },
                { provide: http_1.HTTP_INTERCEPTORS, useClass: _helpers_1.ErrorInterceptor, multi: true },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
