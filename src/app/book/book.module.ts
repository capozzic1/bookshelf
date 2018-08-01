import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { BookService } from './book.service';
import { TruncatePipe } from './pipes/truncate.pipe';
import { BookListComponent } from './book-list/book-list.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookComponent } from './book.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatInputModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  declarations: [
    BookComponent,
    BookDetailComponent,
    BookListComponent,
    TruncatePipe
  ],
  providers: [
    BookService
  ]
})
export class BookModule { }
