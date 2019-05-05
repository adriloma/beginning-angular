import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginService } from './login.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.service';
import { AuthGuard} from './auth-guard.service';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
    ],
    exports: [],
    providers: [
        AuthGuard,
        LoginService,
        PreventUnsavedChangesGuard
    ]
})
export class LoginModule {
    // ...
}