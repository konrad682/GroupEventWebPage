import { OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService, AlertService } from '../_services';
export declare class LoginComponent implements OnInit {
    private formBuilder;
    private route;
    private router;
    private authenticationService;
    private alertService;
    loginForm: FormGroup;
    loading: boolean;
    submitted: boolean;
    returnUrl: string;
    error: string;
    success: string;
    constructor(formBuilder: FormBuilder, route: ActivatedRoute, router: Router, authenticationService: AuthenticationService, alertService: AlertService);
    ngOnInit(): void;
    get f(): any;
    onSubmit(): void;
}
