import { Component, OnInit } from '@angular/core';
import { Person } from './person';
import { PersonDetailComponent } from './person-detail.component';
import { PersonService } from './person.service';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [href]="wikiUrl">
        <img [src]="imageUrl" class="cover-image"/>
    </a>
    <ul class="people-list">
        <li *ngFor="let person of people"
             (click)="onSelect(person)"
             [class.selected-person]="person === selectedPerson">
            <span class="badge">{{person.id}}</span> {{person.name}}
        </li>
    </ul>
       <my-person-detail [person]="selectedPerson"></my-person-detail>
    `,
    directives: [PersonDetailComponent],
    providers: [PersonService]
})



export class AppComponent implements OnInit {
    constructor(private personService: PersonService) {};
    title = "Farscape Heroes";
    people: Person[];
    selectedPerson: Person;
    onSelect(person: Person) { this.selectedPerson = person; };
    imageUrl = "http://www.henson.com/images/fantasy/farscape/fs-header.jpg";
    wikiUrl = "https://en.wikipedia.org/wiki/Farscape";

    ngOnInit() {
        this.personService.getPeople()
            .then( results => {
                this.people = results;
            });
    }
}