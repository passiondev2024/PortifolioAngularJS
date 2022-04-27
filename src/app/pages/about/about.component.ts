import { Component, OnInit } from '@angular/core';

const age = new Date().getFullYear() - 1995;
const ELEMENT_DATA = [
  {question: 'Name', aswer: "Maria Do Socorro De Macedo"},
  {question: 'Age',aswer: `${new Date().getMonth() < 9 ? age - 1 : age}`},
  {question: 'Address',aswer: 'Ferraz de vasconcelos, São Paulo / Brazil'},
  {question: 'Phone',aswer: '+55 (11) 98347-5047'},
  {question: 'Email',aswer: 'mariamacedo2xx@gmail.com'},
];


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  displayedColumns: string[] = ['question', 'aswer'];
  dataSource = ELEMENT_DATA;


  constructor() { }

  ngOnInit(): void {

  }

}
