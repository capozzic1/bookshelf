import { LibraryRoutingModule } from './library-routing.module';
import { BookModule } from './../book/book.module';
import { LibraryComponent } from './library.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BookModule,
    LibraryRoutingModule
    
  ],
  declarations: [
    LibraryComponent
  ],
  providers: [
  
  ]

})
export class LibraryModule { }
