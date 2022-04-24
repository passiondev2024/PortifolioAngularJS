import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  telefone: string = "../../assets/telefone.png";
  images: string[] = ["netflix.png", "noChat.jpg", "olx1.jpg", "noChat2.jpg"];
  widthSlider: string = `calc(220px * ${this.images.length})`;
  ngOnInit(): void {
  
  }
}
