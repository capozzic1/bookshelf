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

    it('should get books', () => {

        const dummyBooks: Book[] = [
            { title: 'test', category: ['art'], author: [], bookCover: [], id: 3 },
            { title: 'test2', category: ['science'], author: [], bookCover: [], id: 2 }
        ];
        const testQuery = 'test';
        const queryURL = `https://www.googleapis.com/books/v1/volumes?
        q=${testQuery}&maxResults=10&startIndex=10`;
        //rewrite the service method to be easier to test
        service.getBooks(queryURL);

        
        // https://www.googleapis.com/books/v1/volumes?q=test&maxResults=10&startIndex=10
        

        request.flush(dummyBooks);
    });
});