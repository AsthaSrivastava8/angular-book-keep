import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { AddBookComponent } from './add-book/add-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { FindBookComponent } from './find-book/find-book.component';
import { BookHomeComponent } from './book-home/book-home.component';
import { ActionCompletedComponent } from './action-completed/action-completed.component';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    DeleteBookComponent,
    AddBookComponent,
    EditBookComponent,
    FindBookComponent,
    BookHomeComponent,
    ActionCompletedComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ButtonModule,
    InputTextModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
