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
var core_1 = require("@angular/core");
var _services_1 = require("../_services");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var router_2 = require("@angular/router");
var FormInformationComponent = /** @class */ (function () {
    function FormInformationComponent(formBuilder, route, authenticationService, formEventService, alertService, _location, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.authenticationService = authenticationService;
        this.formEventService = formEventService;
        this.alertService = alertService;
        this._location = _location;
        this.router = router;
        this.users = [];
        this.currentUser = this.authenticationService.currentUserValue;
    }
    FormInformationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.kindEvent = params['kindEvent'];
            _this.eventID = +params['id'];
        });
        this.loadFormEventByID();
    };
    FormInformationComponent.prototype.loadFormEventByID = function () {
        var _this = this;
        this.formEventService.getFormEventByID(this.eventID, this.kindEvent)
            .subscribe(function (data) { return _this.form = data; });
    };
    FormInformationComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    FormInformationComponent.prototype.deteleEvent = function () {
        var _this = this;
        this.formEventService.deleteForm(this.eventID, this.kindEvent).subscribe(function () { return _this.loadFormEventByID(); });
        setTimeout(function () {
            _this._location.back();
        }, 500);
    };
    FormInformationComponent.prototype.joinToEvent = function () {
        var _this = this;
        this.formEventService.assignUserAndEventForm(this.currentUser.id, this.eventID, this.kindEvent)
            .subscribe(function () { return _this; });
    };
    FormInformationComponent.prototype.editForm = function () {
        this.router.navigate(['/editForm', this.kindEvent, this.eventID]);
    };
    FormInformationComponent.prototype.cancel = function () {
        this._location.back();
    };
    FormInformationComponent = __decorate([
        core_1.Component({ templateUrl: 'formInformation.component.html' }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_2.ActivatedRoute,
            _services_1.AuthenticationService,
            _services_1.FormEventService,
            _services_1.AlertService,
            common_1.Location,
            router_1.Router])
    ], FormInformationComponent);
    return FormInformationComponent;
}());
exports.FormInformationComponent = FormInformationComponent;
