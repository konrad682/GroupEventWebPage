import { Component, OnInit } from '@angular/core';
import { AuthenticationService, FormEventService } from '../_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({ templateUrl: 'eventListPageConcert.component.html' })
export class EventListPageConcertComponent implements OnInit {
    currentUser: any;
    formsEvent = [];

    constructor(
        private authenticationService: AuthenticationService,
        private formEventService: FormEventService,
        private router: Router,
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllFormsEvent();
    }

    private loadAllFormsEvent() {
        this.formEventService.getAllForms("concert")
            .pipe(first())
            .subscribe(formsEvent => this.formsEvent = formsEvent);

        console.log(this.formsEvent);
    }

    navigateToFormEventPage() {
        this.router.navigate(['/formEvent', 'concert']);
    }

    formInformation(id: number){
        this.router.navigate(['/formInfomation', 'concert', id]);
    }
}