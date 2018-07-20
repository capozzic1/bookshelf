import { BookService } from './../shared/book.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  term: string;
  constructor(private bookService: BookService) { }

  ngOnInit() {
  }

  doSearch(){
    console.log(this.term)
    this.bookService.getBooks(this.term);
  }

}
