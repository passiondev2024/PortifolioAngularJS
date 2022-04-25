import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  telefone: string = "../../assets/telefone.png";
  images: string[] = [ "1.jpg", "netflix.png","2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"];
  widthSlider: string = `calc(220px * ${this.images.length})`;
  ngOnInit(): void {
  
  }
}
