import { Component } from '@angular/core';
import { ProductsService } from './products.service';
@Component({
  selector: 'app-root',
  template: `<h1>{{title}}</h1>
            <products></products>`,
   providers: [ProductsService]
})
export class AppComponent {
  title:string = 'My first Angular App!';
}
