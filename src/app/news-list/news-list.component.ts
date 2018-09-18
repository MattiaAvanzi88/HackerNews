import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '.././services/item.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news: Item[];
  ids: Number[];

  constructor(private itemService : ItemService) { }

  ngOnInit() {
    this.getIDNumber();    
  }
  
  getIDNumber() {
    this.itemService.getNewsId()
    .subscribe(ids => this.ids = ids);

  }
}
