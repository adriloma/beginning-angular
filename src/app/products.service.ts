export class ProductsService {
    getProducts(): Object[] {
        return [
            {
                imageUrl: 'http://loremflickr.com/150/150?random=1',
                productName: "Product 1",
                releasedDate: new Date(2019, 0, 1),
                description: "este texto es una descripción que se tiene que hacer bastante larga para poder usar el pipe",
                rating: 4,
                numOfReviews: 2
            }, {
                imageUrl: 'http://loremflickr.com/150/150?random=2',
                productName: "Product 2",
                releasedDate: new Date(1989, 8, 9),
                description: "este texto es una descripción un poquito más parga lara el producto 2. No es tan larga como la anterior pero suficiente para el pipe.",
                rating: 2,
                numOfReviews: 12
            }, {
                imageUrl: 'http://loremflickr.com/150/150?random=3',
                productName: "Product 2",
                releasedDate: new Date(1984, 2, 1),
                description: "este texto es una descripción un poquito más parga lara el producto 3, que tiene una valoración menor. Aquí comentamos lo que sea, pero que llegue al pipe.",
                rating: 1,
                numOfReviews: 3
            },
        ]
    }
}