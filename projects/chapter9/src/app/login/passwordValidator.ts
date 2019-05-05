import { FormControl } from '@angular/forms';

export class PasswordValidator {
    static cannotContainSpaces(formControl: FormControl) {
        if (formControl.value.indexOf(' ') >=0) {
            return { cannotContainSpaces: true};
        }
        return null;
    }
}