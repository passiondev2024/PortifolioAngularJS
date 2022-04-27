import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface ListFooter{
  name: string;
  children?: ListFooter[];
}

const TREE_DATA: ListFooter[] = [
  {
    name: 'Front-End',
    children: [{name: 'AngularJS / Angular13'}, {name: 'ReactJS / React Native'}, {name: 'VueJS'}],
  },
  {
    name: 'Back-End',
    children: [{name: 'NodeJS'}, {name: 'Java 8'}],
  },
  {
    name: 'Database',
    children: [{name: 'MySql / PostgresSQL'}, {name: 'SQL Server'}, {name: 'MongoDB'}],
  },
];
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  treeControl = new NestedTreeControl<ListFooter>(node => node.children);
  dataSource = new MatTreeNestedDataSource<ListFooter>();

  constructor() { 
    this.dataSource.data = TREE_DATA;
  }
 
  hasChild = (_: number, node: ListFooter) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
