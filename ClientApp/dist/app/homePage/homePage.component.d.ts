import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { AuthenticationService, AlertService } from '../_services';
export declare class HomePageComponent {
    private formBuilder;
    private route;
    private router;
    private authenticationService;
    private alertService;
    currentUser: any;
    users: never[];
    constructor(formBuilder: FormBuilder, route: ActivatedRoute, router: Router, authenticationService: AuthenticationService, alertService: AlertService);
}
