import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionCompletedComponent } from './action-completed/action-completed.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookHomeComponent } from './book-home/book-home.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
import { FindBookComponent } from './find-book/find-book.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: BookHomeComponent },
  { path: 'add-book', component: AddBookComponent },
  { path: 'action-completed', component: ActionCompletedComponent },
  { path: 'delete-book', component: DeleteBookComponent },
  { path: 'edit-book', component: EditBookComponent },
  { path: 'find-book', component: FindBookComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
