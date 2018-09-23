import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from '.././items-list/items-list.component';
import { ItemDetailComponent } from '.././item-detail/item-detail.component';
import { DiscussItemComponent } from '../discuss-item/discuss-item.component';

/* 
  The Routing module defines the routes of the application.
  For this mock only two routes are implemented:
  - The Item List page
  - The Item Detail Page
*/

const routes: Routes = [
  { path: '', redirectTo: 'list/new', pathMatch: 'full' },
  { path: 'list/:type', component:  ItemsListComponent},
  { path: 'item/:id', component:  DiscussItemComponent }
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