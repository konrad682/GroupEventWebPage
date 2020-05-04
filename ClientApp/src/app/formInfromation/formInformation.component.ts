import { Component, OnInit } from '@angular/core';
import { AuthenticationService, AlertService, FormEventService } from '../_services';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { first } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({ templateUrl: 'formInformation.component.html' })
export class FormInformationComponent implements OnInit {
    users = [];
    kindEvent: string;
    private sub: any;
    eventID: number;
    form: any;
    currentUser: any;
    

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private authenticationService: AuthenticationService,
        private formEventService: FormEventService,
        private alertService: AlertService,
        private _location: Location,
        private router: Router,
    ) {
        this.currentUser = this.authenticationService.currentUserValue;
    }

    ngOnInit() {
        this.sub = this.route.params.subscribe(params => {
            this.kindEvent = params['kindEvent']; 
            this.eventID = +params['id']; 
         });

         this.loadFormEventByID();
    }

    private loadFormEventByID() {
        this.formEventService.getFormEventByID(this.eventID, this.kindEvent)
            .subscribe((data) => this.form = data);
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
      }

      deteleEvent() 
      {
        this.formEventService.deleteForm(this.eventID, this.kindEvent).subscribe(()=> this.loadFormEventByID());
        setTimeout(() => 
        {
            this._location.back();
        },
        500);
      }

    joinToEvent(){
        this.formEventService.assignUserAndEventForm(this.currentUser.id, this.eventID, this.kindEvent)
        .subscribe(() => {},
        error => {
            this.alertService.error(error);
        });
    }

    editForm(){
        this.router.navigate(['/editForm', this.kindEvent, this.eventID]);
    }

    cancel(){
        this._location.back();
    }
}