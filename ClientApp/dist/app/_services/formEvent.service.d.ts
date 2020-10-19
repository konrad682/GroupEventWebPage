import { HttpClient } from '@angular/common/http';
export declare class FormEventService {
    private http;
    constructor(http: HttpClient);
    getAllForms(kindEvent: any): any;
    createForm(form: any): any;
    updateForm(id: any, kindEvent: any, form: any): any;
    deleteForm(id: any, kindEvent: any): any;
    getFormEventByID(id: any, kindEvent: any): any;
    assignUserAndEventForm(userID: any, eventID: any, kindEvent: any): any;
    getAllFormsEventForUser(userID: any): any;
}
