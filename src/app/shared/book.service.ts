import { Book } from './book';
import { Injectable, OnInit } from '@angular/core';
import { map, tap } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class BookService {
  public books: Book[];
  public _page = 1;
  public API_PATH = `https://www.googleapis.com/books/v1/volumes`;
  public query = '';
  public pageSize = 10;
  public totalItems;

  constructor(private http: HttpClient) { }

  get startIndex() {
    return this.page * this.pageSize;
  }

  
  get totalPages() {
    try {
      return Math.ceil(this.totalItems / this.pageSize);
    } catch(e) {
      console.log(e);
      return 0;
    }
  }

  get page(): number {
    return this._page;
  }

  set page(val: number) {
    
    // tslint:disable-next-line:no-unused-expression
    if (val !== this._page) {
    
      this._page = val;
      this.getBooks(this.query);
    }
  }


  getBooks(query: string): any {
    this.query = query;
    const queryURL = `${this.API_PATH}?q=${this.query}&maxResults=${this.pageSize}&startIndex=${this.startIndex}`;

    this.http.get(queryURL).pipe(
      tap((data: any) => { this.totalItems = data.totalItems; }),
      map((data: any) => {
        
        return data.items.map(item => {
            return this.bookFactory(item);
        });
      }) 
    ).subscribe(books => this.books = books);
  }

  getBook(id: any) {
    const queryURL = `${this.API_PATH}/${id}`;

    return this.http.get(queryURL)
    .pipe(map(item => this.bookFactory(item)));
  }

  bookFactory(item: any): Book {
   // console.log(item)
    return new Book(
      item.volumeInfo.title,
      item.volumeInfo.categories,
      item.volumeInfo.authors,
      item.volumeInfo.imageLinks,
      item.id
    );
  }

}
