import { Component } from '@angular/core';
import { LoginService } from './modules/login/login.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#" (click)="onLogout()" *ngIf="isLoggedIn | async">logout <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#" routerLink ="login" *ngIf="!(isLoggedIn | async)"> login <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
                <a class="nav-link" href="#" routerLink ="signup" *ngIf="!(isLoggedIn | async)"> signup <span class="sr-only">(current)</span></a>
            </li>
            </ul>
        </div>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    isLoggedIn: Observable<boolean>;

    constructor(private loginService: LoginService) {

    }

    ngOnInit() {
        this.loginService.getCurrentUser();
        this.isLoggedIn = this.loginService.isLoggedIn;
    }

    onLogout() {
        this.loginService.logOut();
    }
}
