import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BookModule } from './book/book.module';
import { CoreModule } from './core-module/core.module';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent

  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BookModule,
    MatButtonModule
  ],
  providers: [CoreModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
