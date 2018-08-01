import { LibraryComponent } from './library/library.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
  {
    path: 'search', loadChildren: 'app/search/search.module#SearchModule'
  },
  // { put in book module routing 
  //   path: 'book/:id', component: BookDetailComponent
  // },
  {
    path: 'library', loadChildren: 'app/library/library.module#LibraryModule'
  },
  {
    path: '',
    redirectTo: 'search',
    pathMatch: 'full'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
