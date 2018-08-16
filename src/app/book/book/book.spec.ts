
import { MatChipsModule } from '@angular/material/chips';
import { Book } from './../book';
import { BookComponent } from './book.component';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { MatCardModule } from '@angular/material/card';

describe('BookComponent', () => {
    let component: BookComponent;
    let fixture: ComponentFixture<BookComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [MatChipsModule, MatCardModule],
            declarations: [BookComponent, TruncatePipe],

        });
        fixture = TestBed.createComponent(BookComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeDefined();
    });


    it('should render the category, author, and title in the template', () => {
        const dummyBook = new Book('the world of chocolate by willy wonka', ['food'], ['Dart'], 'test.jpg', 2);
        component.book = dummyBook;
        fixture.detectChanges();

        let chip = fixture.nativeElement.querySelector('mat-chip');
        let matCardTitle = fixture.nativeElement.querySelector('mat-card-title');
        let subtitle = fixture.nativeElement.querySelector('mat-card-subtitle');

        expect(chip.textContent).toContain('food');
        expect(matCardTitle.textContent).toContain('the world');
        expect(subtitle.textContent).toContain('Dart');
    });
});


