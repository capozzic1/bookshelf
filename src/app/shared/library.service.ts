import { Book } from './book';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService implements OnInit{

  public books: Book[] = [];

  constructor() {
   }

  ngOnInit() {
    this.load();
  }

  hasBook(book: Book): boolean {
    return this.indexOf(book) !== -1;
  }

  addBook(book: Book) {
    if (!this.hasBook(book)) {
    
      this.books.push(book);
      this.save();
    }
  }

  save() {
    
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  load() {
    let savedBooks = localStorage.getItem('books');

    if (!savedBooks) {
      return;
    }

    savedBooks = JSON.parse(savedBooks);

    for (let i = 0; i < savedBooks.length; i++){
      const savedBook = savedBooks[i];

      this.books.push(Object.assign(new Book(null, null, null, null, null), savedBook));
    }

  }

  removeBook(book: Book) {
    const index = this.indexOf(book);
    this.books.splice(index, 1);
    this.save();
  }

  indexOf(book: Book): number {
    const length = this.books.length;

    for (let i = 0; i < length; i++) {
      if (this.books[i].id === book.id) {
      
        return i;
      }
    }
    return -1;

  }



}
