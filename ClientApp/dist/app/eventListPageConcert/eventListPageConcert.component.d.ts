import { OnInit } from '@angular/core';
import { AuthenticationService, FormEventService } from '../_services';
import { Router } from '@angular/router';
export declare class EventListPageConcertComponent implements OnInit {
    private authenticationService;
    private formEventService;
    private router;
    currentUser: any;
    formsEvent: never[];
    constructor(authenticationService: AuthenticationService, formEventService: FormEventService, router: Router);
    ngOnInit(): void;
    private loadAllFormsEvent;
    navigateToFormEventPage(): void;
    formInformation(id: number): void;
}
