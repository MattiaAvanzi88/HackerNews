import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Item, ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit, OnDestroy {

  news: Item[];
  ids: Number[];
  private sub: any;

  constructor(
    private route: ActivatedRoute,
    private itemService : ItemService) { }

  ngOnInit() {
    this.sub = this.route.params
    .subscribe(params => {      
       this.getIDNumber(params['type']);
     });        
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
}
  
  getIDNumber(type) {
    this.itemService.getListId(type)
    .subscribe(ids => this.ids = ids);
  }
}
