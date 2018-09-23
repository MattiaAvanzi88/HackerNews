import { Component, OnInit, Input } from '@angular/core';
import { Item, ItemService } from '.././services/item.service';
import { UserService } from '.././services/user.service';


/* 
 
it is the component that deals with displaying a single comment.
if there are sub-components this element is reused recursively 
until all the comments of the original item have been downloaded.
In the same mock way of the DiscussItemComponent provide functions 
to subcomment by the user.
*/
@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  @Input() comment: Item;
  subComments: Item[];
  checkAuthor: boolean;
  newComment: string;

  constructor(
    private itemService: ItemService,
    private userService: UserService
    ) {}

  ngOnInit(): void {
    if(this.comment.kids && this.comment.kids.length) {
      this.getSubComments();
    }
    this.checkAuthor = this.userService.getUserId() === this.comment.by;    
  }
 
  getSubComments(): void {
    this.subComments = new Array;
    for (let kid of this.comment.kids) {
        this.itemService.getItem(kid)
        .subscribe( comment => {
          this.subComments.push(comment)
        }); 
      }
  }
  
  addSubComment(): void {       
    const item = new Item();
    if(!this.subComments) {
      this.comment.kids = [item.id];
      this.subComments = new Array;
    }
    item.text = this.newComment;
    item.by = this.userService.getUserId();
    this.subComments.unshift(item);
  }

}
