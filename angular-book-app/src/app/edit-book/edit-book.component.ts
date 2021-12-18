import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css'],
})
export class EditBookComponent implements OnInit {
  title: string = '';
  author: string = '';
  availableCopies: number = 0;
  price: number = 0.0;
  disabled: boolean = true;

  constructor(private bookService: BookService, private router: Router) {}

  ngOnInit(): void {}

  submitDetails(data: any) {
    this.title = data.title;
    this.author = data.author;
    this.availableCopies = data.availableCopies;
    this.price = data.price;

    const request = {
      title: this.title,
      author: this.author,
      availableCopies: this.availableCopies,
      price: this.price,
    };

    this.bookService.editBookDetails(request).subscribe((response) => {
      if (response && response.success === true) {
        console.log('api response', response);
        this.router.navigate(['action-completed']);
      }
      console.log('api response', response);
    });
  }

  updateDisabled() {
    if (
      this.title != '' ||
      this.author != '' ||
      this.availableCopies != 0 ||
      this.price != 0.0
    )
      this.disabled = false;
  }
}
