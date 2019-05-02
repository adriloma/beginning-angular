import { Component } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'user-form',
    templateUrl: 'user-form.component.html'
})
export class UserFormComponent {
    countries: string[] = ['USA', 'Singapore', 'Hong Kong', 'Australia'];
    model: User = new User("Greg", "greg@mail.com", "USA");
    submitted: boolean = false;

    onSubmit(): void {
        this.submitted = true;
    }
}