import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './signup.component';
import { SignUpService } from './signup.service';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        AngularFireAuthModule
    ],
    declarations: [
        SignUpComponent
    ],
    exports: [
        SignUpComponent
    ],
    providers: [
        SignUpService
    ]
})
export class SignUpModule {
    // ....
}