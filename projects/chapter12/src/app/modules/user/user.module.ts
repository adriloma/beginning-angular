import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component'
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { UserFormComponent } from './user-form.component';
import { AuthGuard } from './../../auth.guard';
@NgModule({
    imports:  [
        CommonModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        UserComponent,
        UserFormComponent
    ],
    exports: [
        UserComponent
    ],
    providers: [AuthGuard]
})
export class UserModule {
    // ....
}