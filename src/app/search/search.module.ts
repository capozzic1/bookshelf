import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { BookModule } from '../book/book.module';
import { SearchPageComponent } from './search-page/search-page.component';
import { SearchComponent } from './search.component';
import { PagerComponent } from './pager/pager.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule} from './search-routing.module';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    BookModule,
    MatButtonModule
  ],
  declarations: [
    PagerComponent,
    SearchComponent,
    SearchPageComponent
  ]
})
export class SearchModule { }
