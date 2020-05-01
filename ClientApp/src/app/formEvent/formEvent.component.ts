import { Component, OnInit } from '@angular/core';
import { AuthenticationService, AlertService, FormEventService } from '../_services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { first } from 'rxjs/operators';

@Component({ templateUrl: 'formEvent.component.html' })
export class FormEventComponent implements OnInit {
    users = [];
    eventForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private authenticationService: AuthenticationService,
        private formEventService: FormEventService,
        private alertService: AlertService,
        private _location: Location
    ) {

    }

    ngOnInit() {
        this.eventForm = this.formBuilder.group({
            nameEvent: ['', Validators.required],
            dateEvent: ['', Validators.required],
            pleaceEvent: ['', Validators.required],
            descEvent: ['', Validators.required],
            kindEvent: ['football'],
            organizer: [this.authenticationService.currentUserValue.username]
        });
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
            .pipe(first())
            .subscribe(
                data => {
                    this._location.back();
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    cancel(){
        this._location.back();
    }
}