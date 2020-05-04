import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomePageComponent } from './homePage';
import { EventListPageFootballComponent } from './eventListPageFootball';
import { FormInformationComponent } from './formInfromation';
import { FormEventComponent } from './formEvent';
import { EditFormComponent } from './editForm';
import { AuthGuard } from './_helpers';
import { EventListPageConcertComponent } from './eventListPageConcert';

const routes: Routes = [
    { path: '', component: HomePageComponent },
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'formEvent/:kindEvent', component: FormEventComponent, canActivate: [AuthGuard] },
    { path: 'football', component: EventListPageFootballComponent, canActivate: [AuthGuard] },
    { path: 'concert', component: EventListPageConcertComponent, canActivate: [AuthGuard] },
    { path: 'formInfomation/:kindEvent/:id', component: FormInformationComponent, canActivate: [AuthGuard] },
    { path: 'editForm/:kindEvent/:id', component: EditFormComponent, canActivate: [AuthGuard] },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);