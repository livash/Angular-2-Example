import { Component } from '@angular/core';
import { PersonService } from './person.service';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <nav>
            <a [routerLink]="['/dashboard']" routerLinkActive="active">Dashboard</a>
            <a [routerLink]="['/people']" routerLinkActive="active">Heroes</a>
        </nav>
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [PersonService]
})

export class AppComponent {
    title = "FarScape";
}