import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class FormEventService {
    constructor(private http: HttpClient) { }

    getAllForms() {
        return this.http.get<any[]>(`${config.apiUrl}/forms`);
    }

    createForm(form) {
        return this.http.post(`${config.apiUrl}/forms/create`, form);
    }

    deleteForm(id) {
        return this.http.delete(`${config.apiUrl}/forms/${id}`);
    }
}