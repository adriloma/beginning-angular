import { Component } from '@angular/core';
import {FormBuilder, FormGroup,  Validators} from '@angular/forms';
import { PasswordValidator } from './passwordValidator';
import { SignUpService} from './signup.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'signup',
    templateUrl: './pages/signup.component.html'
})
export class SignUpComponent {
    form: FormGroup;
    invalidLoginMessage;

    constructor(fb: FormBuilder, private _signUpService: SignUpService, private _route:ActivatedRoute) {
        this.form = fb.group({
            username: ['', Validators.required],
            password: ['', Validators.compose([Validators.required, PasswordValidator.cannotContainSpaces])]
        })
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.invalidLoginMessage = params['invalidLoginMessage'];
        })
    }

    onSignUp() {
        var result = this._signUpService.signUp(
            this.form.controls['username'].value,
            this.form.controls['password'].value,
        )
    }
}