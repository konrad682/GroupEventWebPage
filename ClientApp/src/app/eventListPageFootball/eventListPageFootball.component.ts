import { Component, OnInit } from '@angular/core';
import { AuthenticationService, FormEventService } from '../_services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({ templateUrl: 'eventListPageFootball.component.html' })
export class EventListPageFootballComponent implements OnInit {
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
        this.formEventService.getAllForms()
            .pipe(first())
            .subscribe(formsEvent => this.formsEvent = formsEvent);

        console.log(this.formsEvent);
    }

    navigateToFormEventPage() {
        this.router.navigate(['/formEvent', 'football']);
    }

    formInformation(id: number){
        this.router.navigate(['/formInfomation', 'football', id]);
    }
}