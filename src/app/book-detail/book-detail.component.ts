import { Observable } from 'rxjs';
import { BookService } from './../shared/book.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from './../shared/book';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {

  book$: Observable<Book>;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
    ) { }

  getBook() {
    const id = this.route.snapshot.paramMap.get('id');
    // get book data from service
   this.book$ =  this.bookService.getBook(id);
   
  }

  ngOnInit() {
    this.getBook();
  }

}
