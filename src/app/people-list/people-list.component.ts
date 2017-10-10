import { Component, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-people-list',
  template: `
     <ul>
       <li *ngFor="let person of people">
         {{ person.name }}
       </li>
     </ul>
  `,
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
