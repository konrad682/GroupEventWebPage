import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
export declare class AppComponent {
    private router;
    private authenticationService;
    currentUser: any;
    constructor(router: Router, authenticationService: AuthenticationService);
    logout(): void;
}
