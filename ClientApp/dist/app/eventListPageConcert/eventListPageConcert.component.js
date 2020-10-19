"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventListPageConcertComponent = void 0;
const core_1 = require("@angular/core");
const operators_1 = require("rxjs/operators");
let EventListPageConcertComponent = class EventListPageConcertComponent {
    constructor(authenticationService, formEventService, router) {
        this.authenticationService = authenticationService;
        this.formEventService = formEventService;
        this.router = router;
        this.formsEvent = [];
        this.currentUser = this.authenticationService.currentUserValue;
    }
    ngOnInit() {
        this.loadAllFormsEvent();
    }
    loadAllFormsEvent() {
        this.formEventService.getAllForms("concert")
            .pipe(operators_1.first())
            .subscribe(formsEvent => this.formsEvent = formsEvent);
        console.log(this.formsEvent);
    }
    navigateToFormEventPage() {
        this.router.navigate(['/formEvent', 'concert']);
    }
    formInformation(id) {
        this.router.navigate(['/formInfomation', 'concert', id]);
    }
};
EventListPageConcertComponent = __decorate([
    core_1.Component({ templateUrl: 'eventListPageConcert.component.html' })
], EventListPageConcertComponent);
exports.EventListPageConcertComponent = EventListPageConcertComponent;
