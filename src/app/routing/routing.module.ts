import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from '.././news-list/news-list.component';
import { ItemDetailComponent } from '.././item-detail/item-detail.component';



const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'news', component:  NewsListComponent},
  { path: 'item/:id', component:  ItemDetailComponent }
];


@NgModule({
  imports: [ 
    RouterModule.forRoot(routes) 
  ],
  exports: [ 
    RouterModule 
  ]
})
export class AppRoutingModule { }