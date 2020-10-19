import { OnInit, OnDestroy } from '@angular/core';
import { AlertService } from '../_services';
export declare class AlertComponent implements OnInit, OnDestroy {
    private alertService;
    private subscription;
    message: any;
    constructor(alertService: AlertService);
    ngOnInit(): void;
    ngOnDestroy(): void;
}
