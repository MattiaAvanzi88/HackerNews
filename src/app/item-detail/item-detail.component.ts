import { Component, OnInit, Input } from '@angular/core';
import { Item, ItemService } from '.././services/item.service';

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
