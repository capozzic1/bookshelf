import { RouterModule } from '@angular/router';
import { BookModule } from './../book/book.module';
import { BookComponent } from './../book/book/book.component';
import { BookListComponent } from './../book/book-list/book-list.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryComponent } from './library.component';

describe('LibraryComponent', () => {
  let component: LibraryComponent;
  let fixture: ComponentFixture<LibraryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryComponent ],
      imports: [BookModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('onSwipe', () => {
    it('should navigate to the next page on swipe left', () => {

    });
  });
});
