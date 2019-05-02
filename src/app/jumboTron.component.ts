import { Component } from '@angular/core';
import { Input } from '@angular/core';

@Component({
    selector: 'bs-jumbotron',
    template: `
        <div class="bs-jumbotron">
            <p><ng-content select=".heading"></ng-content></p>
            <p><ng-content select=".body"></ng-content></p>
            <p><a class="btn btn-primary btn-lg" href="#" role="button">
            <ng-content select=".button"></ng-content></a></p>
        </div>
    `
})
export class JumboTronComponent {

}