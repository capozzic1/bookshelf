import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {

  @Input() page = 1;
  @Input() totalPages;
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  
  }

  next() {
    this.changePage.emit(this.page + 1);
  }

  prev() {
   this.changePage.emit(this.page - 1);
  }

}
