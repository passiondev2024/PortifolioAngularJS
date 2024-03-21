import { Component, OnInit } from '@angular/core';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface ListFooter{
  name: string;
  children?: ListFooter[];
}

const TREE_DATA: any[] = [
  {
    name: 'FRONTEND',
    children: [{name: 'Angular'}, {name: 'ReactJS '},{name: 'React Native'}, {name: 'VueJS'}, {name: 'Ionic'}],
  },
  {
    name: 'BACKEND',
    children: [{name: 'NodeJS'}, {name: 'JAVA'}],
  },
  {
    name: 'DATABASE',
    children: [{name: 'MySql '}, {name: 'PostgresSQL'}, {name: 'SQL Server'}, {name: 'MongoDB'}],
  },
  {
    name: 'SKILLS',
    children: [
      {name: 'Netlify '}, 
      {name: 'Vercel '}, 
      {name: 'Heroku'}, 
      {name: 'Appwrite'}, 
      {name: 'Firebase'},
      {name: 'GitLab '},
      {name: 'Azure devops'},
      {name: 'Insomnia '},
      {name: 'Postman'},
      {name: 'Jira'},
      {name: 'Jenkins'},
      {name: 'WebSphere Application Server (WAS)'}
    ],
  },
];
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  dataSource: any = [];

  constructor() { 
    this.dataSource = TREE_DATA;
  }

  ngOnInit(): void {
  }

}
