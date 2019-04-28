import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<button
                class="btn btn-primary"
                [class.disabled]="isDisabled"
                (click)='testClick($event)'>
                    Submit
                </button>`
})
export class AppComponent {
    isDisabled: boolean = false;

    testClick($event: MouseEvent) {
        console.log('Clicked', $event);
    } 
}
