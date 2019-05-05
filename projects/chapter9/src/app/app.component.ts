import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  template: `
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                  <a class="navbar-brand" href="#">Navbar</a>
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item">
                        <a class="nav-link" routerLink="">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" routerLink="GitHub">GitHub</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" routerLink="Settings">Settings</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <router-outlet></router-outlet>
             `
})
export class AppComponent {
 // ...
}
