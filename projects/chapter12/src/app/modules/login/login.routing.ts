import { RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';

export const LoginRouting = RouterModule.forRoot([
    { path: 'login', component: LoginComponent },
    { path: 'login/:invalidLoginMessage', component: LoginComponent }
])