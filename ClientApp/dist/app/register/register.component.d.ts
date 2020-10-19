import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService, AuthenticationService, AlertService } from '../_services';
export declare class RegisterComponent implements OnInit {
    private formBuilder;
    private router;
    private authenticationService;
    private userService;
    private alertService;
    registerForm: FormGroup;
    loading: boolean;
    submitted: boolean;
    error: string;
    constructor(formBuilder: FormBuilder, router: Router, authenticationService: AuthenticationService, userService: UserService, alertService: AlertService);
    ngOnInit(): void;
    get f(): any;
    onSubmit(): void;
}
