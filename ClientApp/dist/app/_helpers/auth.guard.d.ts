import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../_services';
export declare class AuthGuard implements CanActivate {
    private router;
    private authenticationService;
    constructor(router: Router, authenticationService: AuthenticationService);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean;
}
