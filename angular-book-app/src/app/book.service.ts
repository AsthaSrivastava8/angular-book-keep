import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  submitBookBooking(request: any): Observable<any> {
    return this.http.get('assets/book-register-success.json');
    //  return this.http.post(environment.urls.bookBooking + '/addBook', request);
  }
  deleteBookDetails(bookId: any): Observable<any> {
    return this.http.get('assets/book-register-success.json');
    //  return this.http.post(environment.urls.bookBooking + '/addBook', bookId);
  }

  editBookDetails(request: any): Observable<any> {
    return this.http.get('assets/book-register-success.json');
    //  return this.http.post(environment.urls.bookBooking + '/edit', request);
  }

  findBookDetails(bookId: any): Observable<any> {
    return this.http.get('assets/book-register-success.json');
    //  return this.http.post(environment.urls.bookBooking + '/addBook', bookId);
  }
}
