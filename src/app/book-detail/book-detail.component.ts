import { LibraryService } from './../shared/library.service';
import { Observable } from 'rxjs';
import { BookService } from '../shared/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../shared/book';

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
      console.log(this.libraryService.hasBook(book));
      return this.libraryService.hasBook(book);
    }
  }

  addBook(book: Book) {
    if (this.hasBook(book) === false) {
      console.log("added book")
      this.libraryService.addBook(book);
    }
  }

  removeBook(book: Book) {
    if (this.hasBook(book)) {
      console.log("removed book")
      this.libraryService.removeBook(book);
    }
  }

  ngOnInit() {
    this.getBook();
    
  }

}
