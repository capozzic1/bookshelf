import { LibraryService } from './library.service';
import { BookService } from './book.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,

  ],
  providers: [
    BookService,
    LibraryService
  ]

})
export class CoreModule { }
