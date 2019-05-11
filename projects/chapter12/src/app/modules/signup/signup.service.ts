import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SignUpService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private router:Router, private afAuth: AngularFireAuth) {

    }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    signUp(username: string, password: string) {
        if (username !== '' && password !== '') {
            return this.afAuth.auth.createUserWithEmailAndPassword(username, password)
                .then(authState => {
                    console.log('SignUp-then', authState);
                    this.loggedIn.next(true);
                    this.router.navigate(['/']);
                })
                .catch(
                    error => {
                        this.router.navigate(['signup/' + error.message]);
                        console.log(error);
                    }
                )
        }
    }
}