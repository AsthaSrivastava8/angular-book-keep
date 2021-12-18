import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-home',
  templateUrl: './book-home.component.html',
  styleUrls: ['./book-home.component.css'],
})
export class BookHomeComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  gotoAddBook() {
    this.router.navigate(['add-book']);
  }

  gotoDeleteBook() {
    this.router.navigate(['delete-book']);
  }

  gotoEditBook() {
    this.router.navigate(['edit-book']);
  }

  gotoFindBook() {
    this.router.navigate(['find-book']);
  }
}
