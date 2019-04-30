export class ProductsService {
    getProducts(): Object[] {
        return [
            {
                imageUrl: 'http://loremflickr.com/150/150?random=1',
                productName: "Product 1",
                releasedDate: "1/12/2019",
                description: "este texto es una descripción",
                rating: 4,
                numofReviews: 2
            }, {
                imageUrl: 'http://loremflickr.com/150/150?random=2',
                productName: "Product 2",
                releasedDate: "12/08/1989",
                description: "este texto es una descripción un poquito más parga lara el producto 2",
                rating: 2,
                numofReviews: 12
            }, {
                imageUrl: 'http://loremflickr.com/150/150?random=3',
                productName: "Product 2",
                releasedDate: "12/12/2001",
                description: "este texto es una descripción un poquito más parga lara el producto 3, que tiene una valoración menor",
                rating: 1,
                numofReviews: 3
            },
        ]
    }
}