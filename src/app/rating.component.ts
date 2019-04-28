import { Component } from '@angular/core';

@Component({
    selector: 'rating',
    template: `
                <i
                    class='glyphicon'
                    [class.glyphicon-star-empty] = 'rating < 1'
                    [class.glyphicon-star] = 'rating >= 1'
                    (click) = 'rate(1)'
                >
                </i>
                <i
                    class='glyphicon'
                    [class.glyphicon-star-empty] = 'rating < 2'
                    [class.glyphicon-star] = 'rating >= 2'
                    (click) = 'rate(2)'
                >
                </i>
                <i
                    class='glyphicon'
                    [class.glyphicon-star-empty] = 'rating < 3'
                    [class.glyphicon-star] = 'rating >= 3'
                    (click) = 'rate(3)'
                >
                </i>
                <i
                    class='glyphicon'
                    [class.glyphicon-star-empty] = 'rating < 4'
                    [class.glyphicon-star] = 'rating >= 4'
                    (click) = 'rate(4)'
                >
                </i>
                <i
                    class='glyphicon'
                    [class.glyphicon-star-empty] = 'rating < 5'
                    [class.glyphicon-star] = 'rating >= 5'
                    (click) = 'rate(5)'
                >
                </i>
            `
})
export class RatingComponent {
    rating: number = 0;

    rate(rating: number) {
        this.rating = rating;
    }
}