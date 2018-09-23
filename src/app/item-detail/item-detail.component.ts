import { Component, OnInit, Input } from '@angular/core';
import { Item, ItemService } from '.././services/item.service';

/* 
  It is the component used by the ItemListComponent
  to render every single Item.
  It download the data of the 
  item with the id passed as input
*/
@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})
export class ItemDetailComponent implements OnInit {
  
  @Input() id: number;
  @Input() index: number;
  item: Item;

  constructor(private itemService: ItemService) { }

  ngOnInit() {   
    this.getItem();        
  }

  getItem() {
    this.itemService.getItem(this.id)
    .subscribe(item => this.item = item);
  }
}
