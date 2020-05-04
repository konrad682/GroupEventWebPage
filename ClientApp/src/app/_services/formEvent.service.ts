import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FormEventService {
    constructor(private http: HttpClient) { }

    getAllForms() {
        return this.http.get<any[]>(`${config.apiUrl}/formEvent`);
    }

    createForm(form) {
        return this.http.post(`${config.apiUrl}/formEvent/createEventForm`, form);
    }

    updateForm(id, kindEvent, form) {
        return this.http.put(`${config.apiUrl}/formEvent/${kindEvent}/${id}`, form);
    }

    deleteForm(id, kindEvent) {
        return this.http.delete(`${config.apiUrl}/formEvent/${kindEvent}/${id}`);
    }

    getFormEventByID(id, kindEvent) {
        return this.http.get(`${config.apiUrl}/formEvent/${kindEvent}/${id}`);
    }

    assignUserAndEventForm(userID, eventID, kindEvent) {
        return this.http.get(`${config.apiUrl}/formEvent/${kindEvent}/${eventID}/${userID}`);
    }

    getAllFormsEventForUser(userID) {
        return this.http.get<any[]>(`${config.apiUrl}/formEvent/${userID}`);
    }
}