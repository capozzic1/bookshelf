import { PagerComponent } from './pager.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';



describe('PagerComponent', () => {
    let component: PagerComponent;  
    let fixture: ComponentFixture<PagerComponent>;
    let nextEl: DebugElement;
    let previousEl: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ PagerComponent ]
        });

        fixture = TestBed.createComponent(PagerComponent);

        component = fixture.componentInstance;

        nextEl = fixture.debugElement.query(By.css('.btn-next'));
        previousEl = fixture.debugElement.query(By.css('.btn-previous'));


    });

    it('should disable the previous button when page = 1', () => {
        component.page = 1;
        
        fixture.detectChanges();
    
        expect(previousEl.nativeElement.disabled).toBeTruthy();

    });


    it('should disable the next button when page = totalPages', () => {
        component.page = 1;
        component.totalPages = 1;

        fixture.detectChanges();

        expect(nextEl.nativeElement.disabled).toBeTruthy();
    });

    it('should emit page + 1 when next is clicked', () => {
        component.page = 1;

        component.changePage.subscribe(value => component.page = value);
        nextEl.triggerEventHandler('click', null);
    

        expect(component.page).toBe(2);

    });

    it('should emit page - 1 when previous is clicked', () => {
        component.page = 2;

        component.changePage.subscribe(value => component.page = value);
        previousEl.triggerEventHandler('click', null);

        expect(component.page).toBe(1);
    });

});