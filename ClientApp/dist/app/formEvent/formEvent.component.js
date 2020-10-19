"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormEventComponent = void 0;
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const operators_1 = require("rxjs/operators");
let FormEventComponent = class FormEventComponent {
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
        });
        this.eventForm = this.formBuilder.group({
            nameEvent: ['', forms_1.Validators.required],
            dateEvent: ['', forms_1.Validators.required],
            placeEvent: ['', forms_1.Validators.required],
            descEvent: ['', forms_1.Validators.required],
            timeEvent: ['', forms_1.Validators.required],
            numberPlacesEvent: ['', forms_1.Validators.required],
            kindEvent: [this.kindEvent],
            organizer: [this.authenticationService.currentUserValue.username]
        });
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
        this.formEventService.createForm(this.eventForm.value)
            .pipe(operators_1.first())
            .subscribe(data => {
            this._location.back();
        }, error => {
            this.alertService.error(error);
            this.loading = false;
        });
    }
    cancel() {
        this._location.back();
    }
};
FormEventComponent = __decorate([
    core_1.Component({ templateUrl: 'formEvent.component.html' })
], FormEventComponent);
exports.FormEventComponent = FormEventComponent;
