// Importa el decorador Component del modulo core de Angular
import  { Component } from '@angular/core'
import {ProductsService } from './products.service'

// El decorador Component indica al compilador de angular que la siguiente clase sera un Component, 
// pasándole un objeto como metadata de la clase. La propiedad 'selector' indica el nombre del
// tag bajo el cual renderizar el componente (<products>). La propiedad template indica
// El html que se va a renderizar dentro del selector.
@Component({
    selector: 'products',
    template: `<h2>Products</h2>
              <div *ngIf= "products.length === 0; else loading">
                <span> No products to show </span>
              </div>
              <ng-template #loading>
                <div *ngFor= "let product of products">
                    <product [data] = "product"></product>
                </div>
              </ng-template>`
})

// Se exporta la clase para que esté disponible para ser importada por otros archivos de la aplicación
export class ProductsComponent {
    products: Object[] = [];

    constructor(ProductsService: ProductsService) {
        this.products = ProductsService.getProducts();
    }
}