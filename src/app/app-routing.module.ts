
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'search', loadChildren: './search/search.module#SearchModule'
  },
  // { put in book module routing 
  //   path: 'book/:id', component: BookDetailComponent
  // },
  {
    path: 'library', loadChildren: './library/library.module#LibraryModule'
  },
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
