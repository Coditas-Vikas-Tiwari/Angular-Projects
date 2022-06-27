import { Injectable } from '@angular/core';
import { PeopleList } from 'src/mock/backend';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor() {}

  async getPeopleList() {
    // mock call to the backend
    const peopleList = await PeopleList();

    return peopleList;
  }
}
