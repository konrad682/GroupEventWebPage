import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services';
export declare class ErrorInterceptor implements HttpInterceptor {
    private authenticationService;
    constructor(authenticationService: AuthenticationService);
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>;
}
