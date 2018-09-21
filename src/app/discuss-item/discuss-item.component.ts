import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, ItemService } from '.././services/item.service';
import { UserService } from '.././services/user.service';

@Component({
  selector: 'app-discuss-item',
  templateUrl: './discuss-item.component.html',
  styleUrls: ['./discuss-item.component.css']
})
export class DiscussItemComponent implements OnInit {

  item: Item;
  comments: Item[];

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.getItem();
  }
 
  getItem(): void {
    const that = this;
    const id = +this.route.snapshot.paramMap.get('id');
    this.itemService.getItem(id)
    .subscribe(item => {
      this.item = item;
      this.comments = new Array;
      if (this.item.kids && this.item.kids.length) {
        for (let kid of this.item.kids) {
          that.itemService.getItem(kid)
          .subscribe( comment => {
            this.comments.push(comment)
          }); 
        }
      }
    }      
    );
  }

  addComment(newComment: string) {
    const item = new Item();
    item.text = newComment;
    item.by = this.userService.getUserId();
    this.comments.unshift(item);
  } 

}
