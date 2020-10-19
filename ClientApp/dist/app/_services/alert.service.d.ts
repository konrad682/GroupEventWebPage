import { Router } from '@angular/router';
import { Observable } from 'rxjs';
export declare class AlertService {
    private router;
    private subject;
    private keepAfterRouteChange;
    constructor(router: Router);
    getAlert(): Observable<any>;
    success(message: string, keepAfterRouteChange?: boolean): void;
    error(message: string, keepAfterRouteChange?: boolean): void;
    clear(): void;
}
