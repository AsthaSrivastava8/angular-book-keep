import { Observable, takeWhile, tap, timer } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-action-completed',
  templateUrl: './action-completed.component.html',
  styleUrls: ['./action-completed.component.css'],
})
export class ActionCompletedComponent implements OnInit {
  counter: number = 1;
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.gotoHomePage();
  }

  gotoHomePage() {
    this.counter = 5;
    timer(1000, 1000)
      .pipe(
        takeWhile(() => this.counter > 0),
        tap(() => this.counter--)
      )
      .subscribe(() => {
        //console.log(this.counter);
        this.counter === 0 && this.goHome();
      });
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
