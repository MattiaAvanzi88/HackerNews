import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsListComponent } from '.././items-list/items-list.component';
import { ItemDetailComponent } from '.././item-detail/item-detail.component';
import { DiscussItemComponent } from '../discuss-item/discuss-item.component';



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