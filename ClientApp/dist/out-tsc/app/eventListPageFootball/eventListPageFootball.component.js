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
exports.EventListPageFootballComponent = void 0;
var core_1 = require("@angular/core");
var _services_1 = require("../_services");
var operators_1 = require("rxjs/operators");
var router_1 = require("@angular/router");
var EventListPageFootballComponent = /** @class */ (function () {
    function EventListPageFootballComponent(authenticationService, formEventService, router) {
        this.authenticationService = authenticationService;
        this.formEventService = formEventService;
        this.router = router;
        this.formsEvent = [];
        this.currentUser = this.authenticationService.currentUserValue;
    }
    EventListPageFootballComponent.prototype.ngOnInit = function () {
        this.loadAllFormsEvent();
    };
    EventListPageFootballComponent.prototype.loadAllFormsEvent = function () {
        var _this = this;
        this.formEventService.getAllForms("football")
            .pipe(operators_1.first())
            .subscribe(function (formsEvent) { return _this.formsEvent = formsEvent; });
        console.log(this.formsEvent);
    };
    EventListPageFootballComponent.prototype.navigateToFormEventPage = function () {
        this.router.navigate(['/formEvent', 'football']);
    };
    EventListPageFootballComponent.prototype.formInformation = function (id) {
        this.router.navigate(['/formInfomation', 'football', id]);
    };
    EventListPageFootballComponent = __decorate([
        core_1.Component({ templateUrl: 'eventListPageFootball.component.html' }),
        __metadata("design:paramtypes", [_services_1.AuthenticationService,
            _services_1.FormEventService,
            router_1.Router])
    ], EventListPageFootballComponent);
    return EventListPageFootballComponent;
}());
exports.EventListPageFootballComponent = EventListPageFootballComponent;
//# sourceMappingURL=eventListPageFootball.component.js.map