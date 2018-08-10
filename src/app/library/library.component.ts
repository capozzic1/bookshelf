import { LibraryService } from './../core-module/library.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent implements OnInit {

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
  }

}
