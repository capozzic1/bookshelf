import { LibraryService } from './../../core-module/library.service';
import { BookService } from '../../core-module/book.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book: Book;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private libraryService: LibraryService
    ) { }

  getBook() {
    const id = this.route.snapshot.paramMap.get('id');
    // get book data from service
   this.bookService.getBook(id).subscribe(book => this.book = book);
  }

  hasBook(book: Book): boolean {
    if (book) {
      return this.libraryService.hasBook(book);
    }
  }

  addBook(book: Book) {
    if (!this.hasBook(book)) {
      this.libraryService.addBook(book);
    }
  }

  removeBook(book: Book) {
    if (this.hasBook(book)) {
      this.libraryService.removeBook(book);
    }
  }

  ngOnInit() {
    this.getBook();
  }

}
