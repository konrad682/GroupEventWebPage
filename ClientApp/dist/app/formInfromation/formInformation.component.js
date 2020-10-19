"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormInformationComponent = void 0;
const core_1 = require("@angular/core");
let FormInformationComponent = class FormInformationComponent {
    constructor(formBuilder, route, authenticationService, formEventService, alertService, _location, router) {
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
    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.kindEvent = params['kindEvent'];
            this.eventID = +params['id'];
        });
        this.loadFormEventByID();
    }
    loadFormEventByID() {
        this.formEventService.getFormEventByID(this.eventID, this.kindEvent)
            .subscribe((data) => this.form = data);
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    deteleEvent() {
        this.formEventService.deleteForm(this.eventID, this.kindEvent).subscribe(() => this.loadFormEventByID());
        setTimeout(() => {
            this._location.back();
        }, 500);
    }
    joinToEvent() {
        this.formEventService.assignUserAndEventForm(this.currentUser.id, this.eventID, this.kindEvent)
            .subscribe(() => { }, error => {
            this.alertService.error(error);
        });
    }
    editForm() {
        this.router.navigate(['/editForm', this.kindEvent, this.eventID]);
    }
    cancel() {
        this._location.back();
    }
};
FormInformationComponent = __decorate([
    core_1.Component({ templateUrl: 'formInformation.component.html' })
], FormInformationComponent);
exports.FormInformationComponent = FormInformationComponent;
