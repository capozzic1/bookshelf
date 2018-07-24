import { TestBed } from '@angular/core/testing';
import { BookService } from './book.service';
import { Book } from './book';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('BookService', () => {
    let service: BookService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [ HttpClientTestingModule ],
            providers: [ BookService ]
        });

    service = TestBed.get(BookService);
    httpMock = TestBed.get(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should get multiple books', () => {
        // Arrange
        const dummyBooks: Book[] = [
            { title: 'test', category: ['art'], author: [], bookCover: [], id: 3 },
            { title: 'test2', category: ['science'], author: [], bookCover: [], id: 2 }
        ];
        const testQuery = 'test';
        const queryURL = `https://www.googleapis.com/books/v1/volumes?q=${testQuery}&maxResults=10&startIndex=10`;
        // Act
        service.getBooks(testQuery).subscribe(books => {
            // Assert
            expect(books.length).toBe(2);
            expect(books).toEqual(dummyBooks);
        });
        // Assert
        const request = httpMock.expectOne(queryURL);

        expect(request.request.method).toBe('GET');

        request.flush(dummyBooks);
    });

    it('should get a book', () => {
        const dummyBook: Book = { title: 'test', category: ['art'], author: [], bookCover: [], id: 3 };
        const testId = 12;
        const queryURL = `https://www.googleapis.com/books/v1/volumes/${testId}`;

        service.getBook(testId).subscribe((book) => {
        
            expect(book).toEqual(dummyBook);
        });

        const request = httpMock.expectOne(queryURL);

        expect(request.request.method).toBe('GET');
    })

    it('should set the page', () => {
        service.page = 2;

        expect(service.page).toBe(2);
    })

    it('should get the startIndex', () => {
        service.page = 1;
        service.pageSize = 10;

        expect(service.startIndex).toBe(10);

    });

    it('should get the totalPages', () => {
        service.totalItems = 2186;
        service.pageSize = 10;

        expect(service.totalPages).toBe(219);
    })
});