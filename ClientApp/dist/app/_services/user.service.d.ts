import { HttpClient } from '@angular/common/http';
export declare class UserService {
    private http;
    constructor(http: HttpClient);
    getAll(): any;
    register(user: any): any;
    delete(id: any): any;
}
