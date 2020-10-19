"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EditFormComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const operators_1 = require("rxjs/operators");
let EditFormComponent = class EditFormComponent {
    constructor(formBuilder, route, authenticationService, formEventService, alertService, _location) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.authenticationService = authenticationService;
        this.formEventService = formEventService;
        this.alertService = alertService;
        this._location = _location;
        this.loading = false;
        this.submitted = false;
    }
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.kindEvent = params['kindEvent'];
            this.eventID = +params['id'];
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
        setTimeout(() => {
            this.eventForm.setValue({
                nameEvent: this.form.nameEvent,
                dateEvent: this.form.dateEvent,
                placeEvent: this.form.placeEvent,
                descEvent: this.form.descEvent,
                timeEvent: this.form.timeEvent,
                numberPlacesEvent: this.form.numberPlacesEvent
            });
        }, 500);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    get f() { return this.eventForm.controls; }
    onSubmit() {
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
            .subscribe(data => {
            this._location.back();
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
    loadFormEventByID() {
        this.formEventService.getFormEventByID(this.eventID, this.kindEvent)
            .subscribe((data) => this.form = data);
    }
    cancel() {
        this._location.back();
    }
};
EditFormComponent = __decorate([
    core_1.Component({ templateUrl: 'editForm.component.html' })
], EditFormComponent);
exports.EditFormComponent = EditFormComponent;
