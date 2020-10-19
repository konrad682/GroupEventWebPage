"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HomeComponent = void 0;
var core_1 = require("@angular/core");
var operators_1 = require("rxjs/operators");
var _services_1 = require("../_services");
var router_1 = require("@angular/router");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(authenticationService, formEventService, router) {
        this.authenticationService = authenticationService;
        this.formEventService = formEventService;
        this.router = router;
        this.formsEvent = [];
        this.currentUser = this.authenticationService.currentUserValue;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllFormsEventForUser();
    };
    HomeComponent.prototype.loadAllFormsEventForUser = function () {
        var _this = this;
        this.formEventService.getAllFormsEventForUser(this.currentUser.id)
            .pipe(operators_1.first())
            .subscribe(function (formsEvent) { return _this.formsEvent = formsEvent; });
        console.log(this.formsEvent);
    };
    HomeComponent.prototype.formInformation = function (id, kindEvent) {
        this.router.navigate(['/formInfomation', kindEvent, id]);
    };
    HomeComponent = __decorate([
        core_1.Component({ templateUrl: 'home.component.html' }),
        __metadata("design:paramtypes", [_services_1.AuthenticationService,
            _services_1.FormEventService,
            router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map