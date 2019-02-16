import { LibraryService } from './../core-module/library.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {

  constructor(private libraryService: LibraryService, private router: Router) { }

  onSwipe(evt) {
    console.log(evt);
    if (evt.type === 'swipeleft') {
      this.router.navigate(['/search']);
    }
  }
}
