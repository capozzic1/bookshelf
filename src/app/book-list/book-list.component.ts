import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books: Book[];
  

  constructor(private bookService: BookService) { }

  ngOnInit() {
    const test = 'Angular';
    this.bookService.getBooks(test).subscribe(books => {
      console.log(books);
      this.books = books;
    });
  }

}
