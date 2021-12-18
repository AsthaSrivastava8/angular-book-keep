import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-find-book',
  templateUrl: './find-book.component.html',
  styleUrls: ['./find-book.component.css'],
})
export class FindBookComponent implements OnInit {
  bookId: string = '';
  disabled: boolean = true;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}

  findBook() {
    this.bookService.findBookDetails(this.bookId).subscribe((response) => {
      if (response && response.success === true) {
        console.log('api response', response);
        this.router.navigate(['action-completed']);
      }
      console.log('api response', response);
    });
  }

  updateDisabled() {
    if (
      this.bookId.match(/^[0-9]+$/) != null &&
      this.bookId.trim().length != 0
    ) {
      this.disabled = false;
    } else {
      this.disabled = true;
    }
  }
}
