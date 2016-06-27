import { Injectable } from '@angular/core';
import { PEOPLE } from './mock-people-data';

@Injectable()
export class PersonService {
    getPeople() {
        return Promise.resolve(PEOPLE);
    }
}