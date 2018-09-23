import { Injectable } from '@angular/core';


/* 
  User service is the service of the application for
  handling the user login session.
  It is actually a mock because I don't have access
  to the login API
*/




// id	The user's unique username. Case-sensitive. Required.
// delay	Delay in minutes between a comment's creation and its visibility to other users.
// created	Creation date of the user, in Unix Time.
// karma	The user's karma.
// about	The user's optional self-description. HTML.
// submitted	List of the user's stories, polls and comments.
export class User {
  id: string;
  delay: number;
  created: number;
  karma: number;
  about: string;
  submitted: number[];

  constructor() {}
}


@Injectable({
  providedIn: 'root'
})

export class UserService {


  user: User;

  constructor() {
    this.user = new User();
    this.user.id = 'MattiaAvanzi';    
   }

   getUserId(): string {
     return this.user.id;
   }
}
