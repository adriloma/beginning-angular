import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class LoginService {
    private loggedIn = new BehaviorSubject<boolean>(false);

    constructor(private router:Router, private afAuth: AngularFireAuth) {

    }

    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    login(username, password) {
        if (username !== '' && password !== '') {
            return this.afAuth.auth.signInWithEmailAndPassword(username, password)
                .then(authState => {
                    console.log('Login-then', authState);
                    this.loggedIn.next(true);
                    this.router.navigate(['/']);
                })
                .catch(
                    error => {
                        this.router.navigate(['login/' + error.message]);
                        console.log(error);
                    }
                )
        }
    }

    logOut() {
        this.loggedIn.next(false);
        this.afAuth.auth.signOut();
        this.router.navigate(['login']);
    }

    getCurrentUser() {
        return this.afAuth.authState.subscribe(authState => {
            if (authState) {
                this.loggedIn.next(true);
                this.router.navigate(['/']);
                console.log("logged in as " + authState.uid);
            } else {
                this.router.navigate(['login']);
            }
        })
    }
}