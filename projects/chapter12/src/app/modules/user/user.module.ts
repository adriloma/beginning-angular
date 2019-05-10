import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component'
import { RouterModule } from '@angular/router';;

@NgModule({
    imports:  [
        CommonModule,
        RouterModule
    ],
    declarations: [
        UserComponent
    ],
    exports: [
        UserComponent
    ],
    providers: []
})
export class UserModule {
    // ....
}