import { Book } from './book';
import { TestBed } from '@angular/core/testing';

import { LibraryService } from './library.service';

describe('LibraryService', () => {
  let service: LibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LibraryService]
    });

    const store = {};

    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key:string, value:string) => {
        store[key] = `${value}`;
      }
    };

    spyOn(localStorage, 'getItem').and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem').and.callFake(mockLocalStorage.setItem);

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

it('should save books into localStorage', () => {
  const dummyBooks: Book[] = [
    { title: 'test', category: ['art'], author: [], bookCover: [], id: 3 },
    { title: 'test2', category: ['science'], author: [], bookCover: [], id: 2 }
];

  service.books = dummyBooks;

  service.save();

  expect(localStorage.getItem('books')).toEqual(JSON.stringify(dummyBooks));
 


});

  
});
