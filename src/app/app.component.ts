import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<rating></rating>`
})
export class AppComponent {
    isDisabled: boolean = false;

    testClick($event: MouseEvent) {
        console.log('Clicked', $event);
    } 
}
