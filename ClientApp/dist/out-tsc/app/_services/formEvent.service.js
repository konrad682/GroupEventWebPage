"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormEventService = void 0;
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var FormEventService = /** @class */ (function () {
    function FormEventService(http) {
        this.http = http;
    }
    FormEventService.prototype.getAllForms = function (kindEvent) {
        return this.http.get(config.apiUrl + "/formEvent/getForms/" + kindEvent);
    };
    FormEventService.prototype.createForm = function (form) {
        return this.http.post(config.apiUrl + "/formEvent/createEventForm", form);
    };
    FormEventService.prototype.updateForm = function (id, kindEvent, form) {
        return this.http.put(config.apiUrl + "/formEvent/" + kindEvent + "/" + id, form);
    };
    FormEventService.prototype.deleteForm = function (id, kindEvent) {
        return this.http.delete(config.apiUrl + "/formEvent/" + kindEvent + "/" + id);
    };
    FormEventService.prototype.getFormEventByID = function (id, kindEvent) {
        return this.http.get(config.apiUrl + "/formEvent/" + kindEvent + "/" + id);
    };
    FormEventService.prototype.assignUserAndEventForm = function (userID, eventID, kindEvent) {
        return this.http.get(config.apiUrl + "/formEvent/" + kindEvent + "/" + eventID + "/" + userID);
    };
    FormEventService.prototype.getAllFormsEventForUser = function (userID) {
        return this.http.get(config.apiUrl + "/formEvent/" + userID);
    };
    FormEventService = __decorate([
        core_1.Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], FormEventService);
    return FormEventService;
}());
exports.FormEventService = FormEventService;
//# sourceMappingURL=formEvent.service.js.map