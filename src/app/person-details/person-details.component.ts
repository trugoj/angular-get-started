import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Person } from '../person';
import { PeopleService } from '../people.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-person-details',
  template: `
  <section *ngIf="person">
  <h2>You selected: {{ person.name }}</h2>
  <h3>Description</h3>
  <p>
    {{ person.name }} weights   {{ person.weight }} and is   {{ person.height }}
  </p>
  </section>
  `,
  styles: []
})

export class PersonDetailsComponent implements OnInit {
        person: Person;
        sub: any;

        constructor(private peopleService: PeopleService,
                private route: ActivatedRoute) {
        }
        ngOnInit() {
                this.sub = this.route.params.subscribe( params => {
                        let id = Number.parseInt(params['id']);
                        this.person = this.peopleService.get(id);
                });
        }
        ngOnDestroy() {
                this.sub.unsubscribe();
        }
}
