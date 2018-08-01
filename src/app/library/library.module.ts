import { LibraryService } from './library.service';
import { LibraryComponent } from './library.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    LibraryService
  ],
  declarations: [
    LibraryComponent
  ],

})
export class LibraryModule { }
