import { RouterModule } from '@angular/router';
import { LibraryComponent } from './library.component';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';


const ROUTES: Routes = [
    {
        path: '',
        component: LibraryComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    exports: [RouterModule]
})
export class LibraryRoutingModule {}

