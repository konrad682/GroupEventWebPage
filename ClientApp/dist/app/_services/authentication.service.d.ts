import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export declare class AuthenticationService {
    private http;
    private currentUserSubject;
    currentUser: Observable<any>;
    constructor(http: HttpClient);
    get currentUserValue(): any;
    login(username: any, password: any): any;
    logout(): void;
}
