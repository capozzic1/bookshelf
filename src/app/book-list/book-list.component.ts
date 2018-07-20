import { Observable } from 'rxjs';
import { Book } from './../shared/book';
import { Component, OnInit, Input } from '@angular/core';
import { BookService } from '../shared/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  @Input() books;

  constructor() { }

  ngOnInit() {
  }

}
