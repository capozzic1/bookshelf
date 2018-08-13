import { Book } from './../book';
import { of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { BookDetailComponent } from './book-detail.component';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
describe('BookDetailComponent', () => {
let component: BookDetailComponent;
let mockActivatedRoute, mockLibraryService, mockBookService, book;


beforeEach(() => {
    mockBookService = jasmine.createSpyObj(['getBook']);
    mockLibraryService = jasmine.createSpyObj(['hasBook', 'addBook', 'removeBook']);
    mockActivatedRoute = {
        snapshot: { paramMap: { get: () => 1 }}
    };
    book = new Book('', [], [], '', 1);
    //mockRoute = TestBed.get(ActivatedRoute);
    component = new BookDetailComponent(mockActivatedRoute, mockBookService, mockLibraryService);
});
    describe('getHero', () => {
        it('should get a book from the book service and set the book property', () => {
            
            mockBookService.getBook.and.returnValue(of(book));

            component.getBook();

            expect(component.book).toEqual(book);
        });
    })
    
    describe('hasBook', () => {
        it("should call the library service's hasBook method", () => {
            component.hasBook(book);

            expect(mockLibraryService.hasBook).toHaveBeenCalled();
        });
    });

    describe('addBook', () => {
        it("should call the library service's addBook method with the correct parameter", () => {
            component.addBook(book);

            expect(mockLibraryService.addBook).toHaveBeenCalledWith(book);
        });
    });

    describe('removeBook', () => {
        it("should call the library service's removeBook method with the correct parameter", () => {
        component.book = book;
        mockLibraryService.hasBook.and.returnValue(true);

        component.removeBook(book);

        expect(mockLibraryService.removeBook).toHaveBeenCalledWith(book);
        });
    });
});
