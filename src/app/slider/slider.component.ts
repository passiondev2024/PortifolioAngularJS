import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  telefone: string = "../../assets/telefone.png";

  

  constructor() { }

  ngOnInit(): void {
  }

}
