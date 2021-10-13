import Book from './book';

let b1: Book;
// console.log('b1 is', b1); // error; cannot access b1 before assignment
b1 = new Book();
// console.log('b1 is', b1);
let b2: Book = new Book('Let us Angular', 'Vinod Kumar', 980.0);

b1.print()
b2.print();
