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
var operators_1 = require("rxjs/operators");
var FormEventComponent = /** @class */ (function () {
    function FormEventComponent(formBuilder, router, authenticationService, formEventService, alertService, _location) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.formEventService = formEventService;
        this.alertService = alertService;
        this._location = _location;
        this.users = [];
        this.loading = false;
        this.submitted = false;
    }
    FormEventComponent.prototype.ngOnInit = function () {
        this.eventForm = this.formBuilder.group({
            nameEvent: ['', forms_1.Validators.required],
            dateEvent: ['', forms_1.Validators.required],
            pleaceEvent: ['', forms_1.Validators.required],
            descEvent: ['', forms_1.Validators.required],
            kindEvent: ['football'],
            organizer: [this.authenticationService.currentUserValue.username]
        });
    };
    Object.defineProperty(FormEventComponent.prototype, "f", {
        get: function () { return this.eventForm.controls; },
        enumerable: true,
        configurable: true
    });
    FormEventComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.eventForm.invalid) {
            return;
        }
        this.loading = true;
        this.formEventService.createForm(this.eventForm.value)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            _this._location.back();
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    FormEventComponent.prototype.cancel = function () {
        this._location.back();
    };
    FormEventComponent = __decorate([
        core_1.Component({ templateUrl: 'formEvent.component.html' }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.Router,
            _services_1.AuthenticationService,
            _services_1.FormEventService,
            _services_1.AlertService,
            common_1.Location])
    ], FormEventComponent);
    return FormEventComponent;
}());
exports.FormEventComponent = FormEventComponent;
