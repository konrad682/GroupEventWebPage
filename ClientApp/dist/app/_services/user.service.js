"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const core_1 = require("@angular/core");
let UserService = class UserService {
    constructor(http) {
        this.http = http;
    }
    getAll() {
        return this.http.get(`${config.apiUrl}/users`);
    }
    register(user) {
        return this.http.post(`${config.apiUrl}/users/register`, user);
    }
    delete(id) {
        return this.http.delete(`${config.apiUrl}/users/${id}`);
    }
};
UserService = __decorate([
    core_1.Injectable({ providedIn: 'root' })
], UserService);
exports.UserService = UserService;
