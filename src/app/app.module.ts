import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { ItemService } from './services/item.service';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/routing.module';
import { NewsListComponent } from './news-list/news-list.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import {TimeAgoPipe} from 'time-ago-pipe';

@NgModule({
  declarations: [
    AppComponent,
    NewsListComponent,
    ItemDetailComponent,
    TimeAgoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    ItemService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
