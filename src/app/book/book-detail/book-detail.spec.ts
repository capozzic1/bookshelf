import { ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from './../../core-module/library.service';
import { BookService } from './../../core-module/book.service';
import { TestBed } from '@angular/core/testing';
import { Book } from './../book';
import { of } from 'rxjs';
import { BookDetailComponent } from './book-detail.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BookDetailComponent', () => {
    let component: BookDetailComponent;
    let mockActivatedRoute, mockLibraryService, mockBookService, book;
    let fixture: ComponentFixture<BookDetailComponent>;

    beforeEach(() => {
        mockBookService = jasmine.createSpyObj(['getBook']);
        mockLibraryService = jasmine.createSpyObj(['hasBook', 'addBook', 'removeBook']);
        mockActivatedRoute = {
            snapshot: { paramMap: { get: () => 1 } }
        };
        book = new Book('', [], [], '', 1);

        TestBed.configureTestingModule({
            declarations: [BookDetailComponent],
            providers: [
                { provide: BookService, useValue: mockBookService },
                { provide: LibraryService, useValue: mockLibraryService },
                { provide: ActivatedRoute, useValue: mockActivatedRoute }
            ],
            schemas: [ NO_ERRORS_SCHEMA ]
        });

        fixture = TestBed.createComponent(BookDetailComponent);
        component = fixture.componentInstance;
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

    describe('ngOnInit', () => {
        it('should call getBook on initialization', () => {
            spyOn(component, 'getBook').and.returnValue(of(true));

            component.ngOnInit();

            expect(component.getBook).toHaveBeenCalled();
        });
    });
});
