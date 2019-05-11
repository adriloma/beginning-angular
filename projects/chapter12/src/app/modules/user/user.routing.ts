import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserFormComponent} from './user-form.component';
import { AuthGuard } from './../../auth.guard';

export const UserRouting = RouterModule.forRoot([
    { path: '', component: UserComponent, canActivate:[AuthGuard]},
    { path: 'add', component: UserFormComponent, canActivate:[AuthGuard]},
    { path: 'add/:id', component: UserFormComponent, canActivate:[AuthGuard]}
])