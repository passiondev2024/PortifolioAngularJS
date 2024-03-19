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
    children: [{name: 'Angular'}, {name: 'ReactJS / React Native'}, {name: 'VueJS'}, {name: 'Ionic'}],
  },
  {
    name: 'Back-End',
    children: [{name: 'NodeJS'}, {name: 'JAVA'}],
  },
  {
    name: 'Database',
    children: [{name: 'MySql / PostgresSQL'}, {name: 'SQL Server'}, {name: 'MongoDB'}],
  },
  {
    name: ' Skills',
    children: [
      {name: 'Deploy: Netlify / Vercel / Heroku'}, 
      {name: 'Firebase / Appwrite'}, 
      {name: 'GitLab / Azure devops'},
      {name: 'Insomnia / Postman'},
      {name: 'Jira'},
      {name: 'Jenkins'},
      {name: 'WebSphere Application Server'}
    ],
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
