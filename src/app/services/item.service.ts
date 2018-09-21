import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'; 

 
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// id	The item's unique id.
// deleted	true if the item is deleted.
// type	The type of item. One of "job", "story", "comment", "poll", or "pollopt".
// by	The username of the item's author.
// time	Creation date of the item, in Unix Time.
// text	The comment, story or poll text. HTML.
// dead	true if the item is dead.
// parent	The comment's parent: either another comment or the relevant story.
// poll	The pollopt's associated poll.
// kids	The ids of the item's comments, in ranked display order.
// url	The URL of the story.
// score	The story's score, or the votes for a pollopt.
// title	The title of the story, poll or job.
// parts	A list of related pollopts, in display order.
// descendants	In the case of stories or polls, the total comment count.
export class Item {
  id: number;
  deleted: boolean;
  type: string;
  by: string;
  time: number;
  text: string;
  dead: boolean;
  parent: number;
  poll: number;
  kids: number[];
  url: string;
  score: number;
  title: string;
  parts: number[];
  descendants: number;

  constructor() {
    this.time= new Date().getTime()/1000;
  }
}

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  hackerApiURL = 'https://hacker-news.firebaseio.com/v0/';


  constructor( private http: HttpClient) { }

  getListId(type : string): Observable<Number[]> {
    return this.http.get<Number[]>(this.hackerApiURL+type+'stories.json');
      // .pipe(
      //   tap(heroes => this.log('fetched heroes')),
      //   catchError(this.handleError('getHeroes', []))
      // );
  }

  getItem(id: number): Observable<Item> {
    const url = this.hackerApiURL+'item/'+id+'.json';
    return this.http.get<Item>(url)
    // .pipe(
    //   tap(_ => this.log(`fetched hero id=${id}`)),
    //   catchError(this.handleError<Hero>(`getHero id=${id}`))
    // );
  }
    

}
