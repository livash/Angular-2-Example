import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <h2>Details about {{person.name}}</h2>
    <div><label>ID: </label>{{person.id}}</div>
    <div>
        <label>Name: </label>
        <input [(ngModel)]="person.name" placeholder="name"/>
    </div>
    `
})

export class AppComponent {
    title = 'My First Angular App';
    person = {
        id: 1,
        name: 'Dargo'
    }
}


export class Person {
    id: number;
    name: string;
}