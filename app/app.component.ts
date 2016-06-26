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
  { id: 21, name: 'Sikozu' }
];


@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <ul>
        <li *ngFor="let person of people">
            <span>{{person.name}}</span>
        </li>
    </ul>
    `
})

export class AppComponent {
    title = "Farscape Heroes";
    public people = PEOPLE;
}