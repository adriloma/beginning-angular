import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './notfound.component';
import { SettingsComponent } from './settings.component';

import { LoginComponent } from './login/login.component';
import { AuthGuard} from './login/auth-guard.service';
import { PreventUnsavedChangesGuard } from './login/prevent-unsaved-changes-guard.service';

export const routing = RouterModule.forRoot([
        {path:'', component: HomeComponent,canActivate: [AuthGuard]},
        {path: 'Settings', component: SettingsComponent,canActivate: [AuthGuard]},
        {path: 'Login', component: LoginComponent, canDeactivate: [PreventUnsavedChangesGuard]},
        {path: '**', component: NotFoundComponent}
    ])
