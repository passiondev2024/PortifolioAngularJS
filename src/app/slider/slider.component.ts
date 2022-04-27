import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  telefone: string = "../../assets/telefone2.png";
  images: string[] = [ "1.jpg", "3.jpg", "5.jpg", "netflix.png", "2.jpg",  "4.jpg",  "6.jpg"];
  widthSlider: string = `calc(220px * ${this.images.length})`;
  ngOnInit(): void {
  
  }
}
