import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  showMenu: boolean = false;
  //@Input() teste: string = "";  OU   @Input() teste!: string;
  @Input() teste: string = "";
  constructor() { 
  
  }
  
  menus = ["home", "about", "projects", "M S M", "languages", "contact", 'experiences'];

  ngOnInit(): void {
  }
  openCloseMenu(): void{
    this.showMenu = !this.showMenu;

    setTimeout(() => {this.showMenu = false},7000);
  }

  
}
