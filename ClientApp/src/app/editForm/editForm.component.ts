import { Component, OnInit } from '@angular/core';
import { AuthenticationService, AlertService, FormEventService } from '../_services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({ templateUrl: 'editForm.component.html' })
export class EditFormComponent implements OnInit {
    eventForm: FormGroup;
    loading = false;
    submitted = false;
    error: string;
    kindEvent: string;
    private sub: any;
    eventID: number;
    form: any;


    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private formEventService: FormEventService,
        private alertService: AlertService,
        private _location: Location
    ) {
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.kindEvent = params['kindEvent']; 
            this.eventID = +params['id']; 
         });

         this.loadFormEventByID();
         
         this.eventForm = this.formBuilder.group({
            nameEvent: ['', Validators.required],
            dateEvent: ['', Validators.required],
            placeEvent: ['', Validators.required],
            descEvent: ['', Validators.required],
            timeEvent: ['', Validators.required],
            numberPlacesEvent: ['', Validators.required],
        });

        //  this.eventForm.setValue({
        //     nameEvent: this.form.nameEvent,
        //     dateEvent: this.form.dateEvent,
        //     placeEvent: this.form.placeEvent,
        //     descEvent: this.form.descEvent,
        //     timeEvent: this.form.timeEvent
        //   });
        setTimeout(() => 
        {
            this.eventForm.setValue({
                    nameEvent: this.form.nameEvent,
                    dateEvent: this.form.dateEvent,
                    placeEvent: this.form.placeEvent,
                    descEvent: this.form.descEvent,
                    timeEvent: this.form.timeEvent,
                    numberPlacesEvent: this.form.numberPlacesEvent
                  });
            
        },
        500);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
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
        this.formEventService.updateForm(this.eventID, this.kindEvent, this.eventForm.value)
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

    private loadFormEventByID() {
        this.formEventService.getFormEventByID(this.eventID, this.kindEvent)
            .subscribe((data) => this.form = data);
    }

    cancel(){
        this._location.back();
    }
}