import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {
    login(username: string, password: string): boolean {
        if (username === 'jason' && password === '123') {
            return true;
        }
        return false;
    }

}