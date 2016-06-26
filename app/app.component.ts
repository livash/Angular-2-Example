import { Component } from '@angular/core';

export class Person {
    id: number;
    name: string;
}

const PEOPLE: Person[] = [
  { id: 11, name: 'John Crichton' },
  { id: 12, name: 'Aeryn Sun' },
  { id: 13, name: "Pau'u Zotoh Zhaan" },
  { id: 14, name: 'Moyah' },
  { id: 15, name: 'Pilot' },
  { id: 16, name: 'Lolah' },
  { id: 17, name: 'Chianah' },
  { id: 18, name: 'Dominar Rygel XVI' },
  { id: 19, name: 'Scorpious' },
  { id: 20, name: 'Stark' },
  { id: 21, name: 'Sikozu' },
  { id: 22, name: 'Ka Dargo' },
  { id: 23, name: 'Chiana' },
  { id: 24, name: 'Lt. Meeklo Braka' },
  { id: 25, name: 'Commandant Mele-On Grayza' }

];


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <a [href]="wikiUrl">
        <img [src]="imageUrl" class="cover-image"/>
    </a>
    <div *ngIf="selectedPerson" class="selected-person-details">
        <h2>{{selectedPerson.name}} details!</h2>
        <div>
            <label>ID: </label>{{selectedPerson.id}}
        </div>
        <div>
            <label>Name: </label>
            <input [(ngModel)]="selectedPerson.name" placeholder="name" />
        </div>
    </div>
    <ul class="people-list">
        <li *ngFor="let person of people"
             (click)="onSelect(person)"
             [class.selected-person]="person === selectedPerson">
            <span class="badge">{{person.id}}</span> {{person.name}}
        </li>
    </ul>
    `
})

export class AppComponent {
    title = "Farscape Heroes";
    public people = PEOPLE;
    selectedPerson: Person;
    onSelect(person: Person) { this.selectedPerson = person; };
    imageUrl = "http://www.henson.com/images/fantasy/farscape/fs-header.jpg";
    wikiUrl = "https://en.wikipedia.org/wiki/Farscape";
}