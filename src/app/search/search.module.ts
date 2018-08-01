import { SearchPageComponent } from './search-page/search-page.component';
import { SearchComponent } from './search.component';
import { PagerComponent } from './pager/pager.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchRoutingModule} from './search-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule
  ],
  declarations: [
    PagerComponent,
    SearchComponent,
    SearchPageComponent
  ]
})
export class SearchModule { }
