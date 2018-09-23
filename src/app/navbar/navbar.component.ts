import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* 
  The NavBar is the naigation header of the application.
  It use the routerLink property to navigate between
  the different list of items.
*/
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private sub: any;
  type: string;

  constructor() { }

  ngOnInit() {
    this.type = location.pathname.split('/')[2];       
  }

}
