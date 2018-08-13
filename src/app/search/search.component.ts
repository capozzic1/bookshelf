import { BookService } from '../core-module/book.service';

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
    //this.bookService.initSearch("test");    
  }

  doSearch() {
    this.bookService.initSearch(this.term);
  }

}
