import { OnInit } from '@angular/core';
import { AuthenticationService, AlertService, FormEventService } from '../_services';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
export declare class FormInformationComponent implements OnInit {
    private formBuilder;
    private route;
    private authenticationService;
    private formEventService;
    private alertService;
    private _location;
    private router;
    users: never[];
    kindEvent: string;
    private sub;
    eventID: number;
    form: any;
    currentUser: any;
    constructor(formBuilder: FormBuilder, route: ActivatedRoute, authenticationService: AuthenticationService, formEventService: FormEventService, alertService: AlertService, _location: Location, router: Router);
    ngOnInit(): void;
    private loadFormEventByID;
    ngOnDestroy(): void;
    deteleEvent(): void;
    joinToEvent(): void;
    editForm(): void;
    cancel(): void;
}
