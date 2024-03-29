import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class LoginService {
    isLoggedIn = false;

    login(username: string, password: string): boolean {
        if (username === 'jason' && password === '123') {
            this.isLoggedIn = true;
        } else {
            this.isLoggedIn = false;
        }
        return this.isLoggedIn;
    }

    logOut() {
        this.isLoggedIn = false;
        return this.isLoggedIn;
    }
}
