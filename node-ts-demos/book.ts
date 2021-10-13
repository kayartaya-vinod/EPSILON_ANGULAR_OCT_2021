import { line } from './vinutils'

class Book {
    // private title: string = '';
    // private author: string = '';
    // private price: number = 0;

    // constructor(title: string = '', author: string = '', price: number = 0) {
    //     this.title = title;
    //     this.author = author;
    //     this.price = price;
    // }

    constructor(private title: string = '', private author: string = '', private price: number = 0) { }

    print(): void {
        console.log('Title', this.title);
        console.log('Author', this.author);
        console.log('Price ₹', this.price);
        line()
    }
}

export default Book;