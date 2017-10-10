import { Component, Input, OnInit } from '@angular/core';
import { Person } from '../person';

@Component({
  selector: 'app-person-details',
  template: `
  <section *ngIf="selectedPerson">
  <h2>You selected: {{ selectedPerson.name }}</h2>
  <h3>Description</h3>
  <p>
    {{ selectedPerson.name }} weights   {{ selectedPerson.weight }} and is   {{ selectedPerson.height }}
  </p>
  </section>
  `,
  styles: []
})
export class PersonDetailsComponent implements OnInit {
  @Input() person: Person;

  constructor() { }
  ngOnInit() {  }

}
