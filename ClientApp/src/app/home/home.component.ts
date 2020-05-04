import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';
import { AuthenticationService, FormEventService } from '../_services';
import { Router } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    currentUser: any;
    formsEvent = [];

    constructor(
        private authenticationService: AuthenticationService,
        private formEventService: FormEventService,
        private router: Router
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.loadAllFormsEventForUser();
    }

    private loadAllFormsEventForUser() {
        this.formEventService.getAllFormsEventForUser(this.currentUser.id)
            .pipe(first())
            .subscribe(formsEvent => this.formsEvent = formsEvent);

        console.log(this.formsEvent);
    }
}