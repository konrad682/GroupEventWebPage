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

    deleteForm(id) {
        return this.http.delete(`${config.apiUrl}/formEvent/${id}`);
    }
}