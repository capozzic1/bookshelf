import { Book } from './../book';
import { BookListComponent } from './book-list.component';
import { TestBed, ComponentFixture } from "@angular/core/testing";
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BookListComponent', () => {
    let component: BookListComponent;
    let fixture: ComponentFixture<BookListComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ BookListComponent ],
            schemas: [NO_ERRORS_SCHEMA]
        
        });
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    });

    it('should be created', () => {
        
        expect(component).toBeDefined();
    });
});
