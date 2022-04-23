import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor() { 
   
  }
  menus = ["HOME", "ABOUT", "PROJECTS", "M S M", "LANGUAGES", "CONTACT", 'EXPERIENCES'];

  ngOnInit(): void {
  }

}
