import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Item, ItemService } from '.././services/item.service';
import { UserService } from '.././services/user.service';

/* 
  DiscussItemComponent it's the component
  rendered when a user want to see or comment
  a specific Item.
  It download the item datas with the id
  recovered by the url and if they are present
  it also download the first level comments.
  For every comment downloaded in this way
  a comment component is rendered.
  It also provide functions to comment the item by 
  the user. 
  Not to dirty the real elements of hackerNews website
  this last feature has not really been implemented 
  because the comments are saved only locally 
  and not sent to the server through a POST request.  
*/
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
