import { Injectable } from '@angular/core';
import { PEOPLE } from './mock-people-data';
import { Person } from './person';

@Injectable()
export class PersonService {
    getPeople() {
        return new Promise<Person[]>( resolve => {
            resolve(PEOPLE);
        });
        //Promise.resolve(PEOPLE);
    }
}