import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Item, ItemService } from '../services/item.service';
import { ActivatedRoute } from '@angular/router';


/* 
ItemListComponent recovered from the server 
the array of the ids of the requested items.
 For every id a item-detail component is render.
 In this simple application only the first 30 ids are used.
 TODO: 
  - pagination for render more then 30 items
  - search box 
*/
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

  /*   
  This procedure is invoked every
  time there is a redirect
  */
  ngOnInit() {
    this.sub = this.route.params
    .subscribe(params => {      
       this.getIDNumber(params['type']);
     });        
  }

  /*
  When the component is destroyed is important
  saving memory doing the unsubscribe 
  of the variable 'sub'. 
  */
  ngOnDestroy() {
    this.sub.unsubscribe();
}
  
  getIDNumber(type) {
    this.itemService.getListId(type)
    .subscribe(ids => this.ids = ids);
  }
}
