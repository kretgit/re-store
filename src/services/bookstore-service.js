export default class BookstoreService {

    getBooks() {
        return [
            {
                id: 1,
                title: 'Dracula',
                author: 'Bram Stoker',
                price: 32,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/41yJ75gpV-L._SX381_BO1,204,203,200_.jpg'
            },
            {
                id: 2,
                title: 'React Redux TypeScript',
                author: 'o Relly',
                price: 45,
                coverImage: 'https://images-na.ssl-images-amazon.com/images/I/414CRjLjwgL._SX403_BO1,204,203,200_.jpg'
            }
        ];
    }

}