"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormEventService = void 0;
const core_1 = require("@angular/core");
let FormEventService = class FormEventService {
    constructor(http) {
        this.http = http;
    }
    getAllForms(kindEvent) {
        return this.http.get(`${config.apiUrl}/formEvent/getForms/${kindEvent}`);
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
        return this.http.get(`${config.apiUrl}/formEvent/${userID}`);
    }
};
FormEventService = __decorate([
    core_1.Injectable({ providedIn: 'root' })
], FormEventService);
exports.FormEventService = FormEventService;
