import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() teste: string = "";
  constructor() { 
   
  }
  
  menus = ["HOME", "ABOUT", "PROJECTS", "M S M", "LANGUAGES", "CONTACT", 'EXPERIENCES'];

  ngOnInit(): void {
  }

}
