import { Book } from './../shared/book';
import { Component, OnInit } from '@angular/core';
import { BookService } from '../shared/book.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books$: Observable<Book[]>;
  

  constructor(private bookService: BookService) { }

  getBooks() {
    const test = 'Angular';
    this.books$ =  this.bookService.getBooks(test);
  }
  ngOnInit() {
    this.getBooks();
  }

}
