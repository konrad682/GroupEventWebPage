import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { HomePageComponent } from './homePage';
import { EventListPageFootballComponent } from './eventListPageFootball';
import { EventListPageConcertComponent } from './eventListPageConcert';
import { FormEventComponent } from './formEvent';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { FormInformationComponent } from './formInfromation';
import { AlertComponent } from './_components';
import { EditFormComponent } from './editForm';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        HomePageComponent,
        FormEventComponent,
        FormInformationComponent,
        EventListPageConcertComponent,
        EditFormComponent,
        EventListPageFootballComponent
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }