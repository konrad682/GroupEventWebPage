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
exports.EditFormComponent = void 0;
var core_1 = require("@angular/core");
var _services_1 = require("../_services");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var operators_1 = require("rxjs/operators");
var router_1 = require("@angular/router");
var EditFormComponent = /** @class */ (function () {
    function EditFormComponent(formBuilder, route, authenticationService, formEventService, alertService, _location) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.authenticationService = authenticationService;
        this.formEventService = formEventService;
        this.alertService = alertService;
        this._location = _location;
        this.loading = false;
        this.submitted = false;
    }
    EditFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.params.subscribe(function (params) {
            _this.kindEvent = params['kindEvent'];
            _this.eventID = +params['id'];
        });
        this.loadFormEventByID();
        this.eventForm = this.formBuilder.group({
            nameEvent: ['', forms_1.Validators.required],
            dateEvent: ['', forms_1.Validators.required],
            placeEvent: ['', forms_1.Validators.required],
            descEvent: ['', forms_1.Validators.required],
            timeEvent: ['', forms_1.Validators.required],
            numberPlacesEvent: ['', forms_1.Validators.required],
        });
        //  this.eventForm.setValue({
        //     nameEvent: this.form.nameEvent,
        //     dateEvent: this.form.dateEvent,
        //     placeEvent: this.form.placeEvent,
        //     descEvent: this.form.descEvent,
        //     timeEvent: this.form.timeEvent
        //   });
        setTimeout(function () {
            _this.eventForm.setValue({
                nameEvent: _this.form.nameEvent,
                dateEvent: _this.form.dateEvent,
                placeEvent: _this.form.placeEvent,
                descEvent: _this.form.descEvent,
                timeEvent: _this.form.timeEvent,
                numberPlacesEvent: _this.form.numberPlacesEvent
            });
        }, 500);
    };
    EditFormComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    Object.defineProperty(EditFormComponent.prototype, "f", {
        get: function () { return this.eventForm.controls; },
        enumerable: false,
        configurable: true
    });
    EditFormComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // reset alerts on submit
        this.alertService.clear();
        // stop here if form is invalid
        if (this.eventForm.invalid) {
            return;
        }
        this.loading = true;
        this.formEventService.updateForm(this.eventID, this.kindEvent, this.eventForm.value)
            .pipe(operators_1.first())
            .subscribe(function (data) {
            _this._location.back();
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    EditFormComponent.prototype.loadFormEventByID = function () {
        var _this = this;
        this.formEventService.getFormEventByID(this.eventID, this.kindEvent)
            .subscribe(function (data) { return _this.form = data; });
    };
    EditFormComponent.prototype.cancel = function () {
        this._location.back();
    };
    EditFormComponent = __decorate([
        core_1.Component({ templateUrl: 'editForm.component.html' }),
        __metadata("design:paramtypes", [forms_1.FormBuilder,
            router_1.ActivatedRoute,
            _services_1.AuthenticationService,
            _services_1.FormEventService,
            _services_1.AlertService,
            common_1.Location])
    ], EditFormComponent);
    return EditFormComponent;
}());
exports.EditFormComponent = EditFormComponent;
//# sourceMappingURL=editForm.component.js.map