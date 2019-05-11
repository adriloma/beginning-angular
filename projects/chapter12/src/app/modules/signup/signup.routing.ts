import { RouterModule } from '@angular/router';
import { SignUpComponent } from './signup.component';

export const SignUpRouting = RouterModule.forRoot([
    { path: 'signup', component: SignUpComponent },
    { path: 'signup/:invalidLoginMessage', component: SignUpComponent }
])