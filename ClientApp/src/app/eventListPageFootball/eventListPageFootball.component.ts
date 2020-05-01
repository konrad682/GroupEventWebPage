import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services';

@Component({ templateUrl: 'eventListPageFootball.component.html' })
export class EventListPageFootballComponent implements OnInit {
    currentUser: any;
    users = [];

    constructor(
        private authenticationService: AuthenticationService,
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
       
    }
}