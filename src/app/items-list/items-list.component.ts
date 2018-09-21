import { Component, OnInit } from '@angular/core';
import { Item, ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  news: Item[];
  ids: Number[];

  constructor(
    private route: ActivatedRoute,
    private itemService : ItemService) { }

  ngOnInit() {
    this.getIDNumber();    
  }
  
  getIDNumber() {
    const type = this.route.snapshot.paramMap.get('type');
    this.itemService.getListId(type)
    .subscribe(ids => this.ids = ids);
  }
}
