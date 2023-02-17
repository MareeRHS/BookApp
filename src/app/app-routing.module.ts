import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import { BooksComponent } from './books/books.component'; 
import { UserComponent } from './user/user.component';

const routes: Routes=[
{
  path:'user',
  component:UserComponent

},
{
  path:'books',
  component:BooksComponent
}
];




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
