import { OnInit } from '@angular/core';
import { AuthenticationService, AlertService, FormEventService } from '../_services';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
export declare class EditFormComponent implements OnInit {
    private formBuilder;
    private route;
    private authenticationService;
    private formEventService;
    private alertService;
    private _location;
    eventForm: FormGroup;
    loading: boolean;
    submitted: boolean;
    error: string;
    kindEvent: string;
    private sub;
    eventID: number;
    form: any;
    constructor(formBuilder: FormBuilder, route: ActivatedRoute, authenticationService: AuthenticationService, formEventService: FormEventService, alertService: AlertService, _location: Location);
    ngOnInit(): void;
    ngOnDestroy(): void;
    get f(): any;
    onSubmit(): void;
    private loadFormEventByID;
    cancel(): void;
}
