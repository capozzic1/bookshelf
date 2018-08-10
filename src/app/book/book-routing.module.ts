import { BookDetailComponent } from './book-detail/book-detail.component';
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';


const ROUTES: Routes = [
    { path: 'book/:id', component: BookDetailComponent }
];

@NgModule({
    imports: [ RouterModule.forChild(ROUTES) ],
    exports: [ RouterModule ]
})
export class BookRoutingModule {}

