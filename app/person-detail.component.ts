import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'my-person-detail',
    template: `
        <div *ngIf="person" class="selected-person-details">
            <h2>{{person.name}} details!</h2>
            <div>
                <label>ID: </label>{{person.id}}
            </div>
            <div>
                <label>Name: </label>
                <input [(ngModel)]="person.name" placeholder="name" />
            </div>
        </div>
    `
})

export class PersonDetailComponent {
    @Input() person: Person;
}