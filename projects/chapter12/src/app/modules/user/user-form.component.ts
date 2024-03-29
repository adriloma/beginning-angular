import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

import { User } from './user';
import { Observable } from 'rxjs';
import { LoginService } from './../login/login.service';

@Component({
    selector: 'user-form',
    templateUrl: './pages/user-form.component.html'
})
export class UserFormComponent {
    id;
    form: FormGroup;
    title: string;
    user = new User();

    userDoc: AngularFirestoreDocument<User>;
    singleUser: Observable<User>;

    constructor(fb: FormBuilder, private _router: Router, private afs: AngularFirestore, private _route: ActivatedRoute, private _loginService: LoginService) {
        this.form = fb.group({
            username: ['', Validators.required],
            email: ['', Validators.required]
        });
    }

    ngOnInit() {
        this._route.params.subscribe(params => {
            this.id = params["id"];
        });

        if (!this.id) {
            this.title = "New user";
        } else {
            this.title = "Edit user";
            this.userDoc = this.afs.doc('users/' + this._loginService.loggedInUser + "/clients/" + this.id);
            this.singleUser = this.userDoc.valueChanges();
            this.singleUser.subscribe((user) => {
                this.form.get('username').setValue(user.name);
                this.form.get('email').setValue(user.email);
            })
        }
    }

    submit(){
        if (this.id) {
            this.afs.doc('users/' + this._loginService.loggedInUser + '/clients/' + this.id).update({
                name: this.user.name,
                email: this.user.email
            })
        } else {
                this.afs.collection('users')
                .doc(this._loginService.loggedInUser)
                .collection('clients')
                .add({
                    name: this.user.name,
                    email: this.user.email
                });
        }
        this._router.navigate(['']);
    }
}