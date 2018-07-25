import { Book } from './book';
import { TestBed } from '@angular/core/testing';

import { LibraryService } from './library.service';

describe('LibraryService', () => {
  let service: LibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryService]
    });

    service = TestBed.get(LibraryService);
  });

it('should retrieve the index of a book', () => {
  service.books = [];
  const book: Book =  { title: 'test', category: ['art'], author: [], bookCover: [], id: 3 };
  service.books.push(book);

  const index: number = service.indexOf(book);
  
  expect(index).toEqual(0);
});

it('should remove books', () => {
  service.books = [];
  const book: Book =  { title: 'test', category: ['art'], author: [], bookCover: [], id: 3 };
  service.books.push(book);

  service.removeBook(book);

  expect(service.books.length).toBe(0);
});

it('should add books', () => {
  const book: Book =  { title: 'test', category: ['art'], author: [], bookCover: [], id: 3 };
  service.books = [];

  service.addBook(book);

  expect(service.books.length).toBe(1);

});


  
});
