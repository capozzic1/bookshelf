import { Router } from '@angular/router';
import { BookService } from '../../core-module/book.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
  }

  onSwipe(evt) {
    this.router.navigate(['/library']);
  }

}
