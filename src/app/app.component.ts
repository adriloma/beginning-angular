import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<bs-jumbotron>
                <span class="heading">Este esl título</span>
                <div class="body">Este esl cuerpo</div>
                <div class="button">aceptar</div>

            </bs-jumbotron>`
})
export class AppComponent {
    isDisabled: boolean = false;

    testClick($event: MouseEvent) {
        console.log('Clicked', $event);
    } 
}
