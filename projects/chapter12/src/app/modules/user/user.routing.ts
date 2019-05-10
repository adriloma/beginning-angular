import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';

export const UserRouting = RouterModule.forRoot([
    { path: '', component: UserComponent}
])