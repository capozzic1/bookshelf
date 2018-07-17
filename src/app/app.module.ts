import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchComponent } from './search/search.component';
import { BookListComponent } from './book-list/book-list.component';
import { PaginateComponent } from './paginate/paginate.component';
import { HttpClientModule } from '@angular/common/http';
import { BookComponent } from './book/book.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchPageComponent,
    SearchComponent,
    BookListComponent,
    PaginateComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
