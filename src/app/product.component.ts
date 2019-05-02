import {Component, Input} from '@angular/core';

@Component({
    selector: 'product',
    template: `
                <div class="media">
                  <div class="media-left">
                    <img src="{{data.imageUrl}}" class="mr-3">
                  </div>
                  <div class="media-body">
                    <h5 class="mt-0">{{data.productName}}</h5>
                        {{data.releasedDate | date | uppercase}}
                        <rating [rating-value] = "data.rating" [numOfReviews] = "data.numOfReviews">
                        </rating><br/>
                        {{data.description | truncate: 40}}
                  </div>
                </div>`,
    styles: [`
        .media {
            margin-bottom: 20px;
        }
    `]
})
export class ProductComponent {
    @Input() data;
}