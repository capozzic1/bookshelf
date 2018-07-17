import { Book } from './book';
import { Injectable, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})

export class BookService {

  constructor(private http: HttpClient) { }

  getBooks(query: string): Observable<any> {
    const API_KEY = 'AIzaSyCYGuQ37yG2Bl0HIXVl-jRbjQYrsIuGDGE';
    const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${API_KEY}`;
    return this.http.get(queryURL).pipe(
      map((data: any) => {
        console.log(data)
        return data.items.map(item => {
            return this.bookFactory(item);
        });
      })
    )
  }

  bookFactory(item: any): Book {
   // console.log(item)
    return new Book(
      item.volumeInfo.title,
      item.volumeInfo.categories,
      item.volumeInfo.authors,
      item.volumeInfo.imageLinks
    );
  }

}
