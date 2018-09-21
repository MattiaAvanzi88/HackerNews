import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ItemService } from './services/item.service';
import { UserService } from './services/user.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';
import { ItemsListComponent } from './items-list/items-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { TimeAgoPipe } from 'time-ago-pipe';
import { DiscussItemComponent } from './discuss-item/discuss-item.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemsListComponent,
    ItemDetailComponent,
    TimeAgoPipe,
    DiscussItemComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ItemService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
