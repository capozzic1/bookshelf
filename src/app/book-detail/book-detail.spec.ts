import { ActivatedRoute } from '@angular/router';
import { BookDetailComponent } from './book-detail.component';

describe('BookDetailComponent', () => {
    let component: BookDetailComponent;
    let book;
    let mockBookService;
    let mockLibraryService;
    const route: ActivatedRoute;

    beforeEach(() => {
        mockBookService = jasmine.createSpyObj(['getBook']);
        mockLibraryService = jasmine.createSpyObj(['hasBook', 'addBook', 'removeBook']);
        component = new BookDetailComponent(route, mockBookService, mockLibraryService);
    });

    it('should get a book', () => {
        

    });
});
