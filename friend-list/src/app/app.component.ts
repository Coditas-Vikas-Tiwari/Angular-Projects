import { Component, OnInit } from '@angular/core';
import { IPeople } from './app.types';
import { HttpService } from './services/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  personList: IPeople[] = [];
  friendList: IPeople[] = [];
  nonFriendList: IPeople[] = [];

  constructor(private httpService: HttpService) {}

  async ngOnInit() {
    this.personList = await this.httpService.getPeopleList();
    this.populateList();
  }

  changeStatus(person: IPeople) {
    person.isFriend = !person.isFriend;
    const personIndex = this.personList.findIndex((p) => p.id === person.id);

    if (personIndex === -1) {
      return;
    }

    this.personList[personIndex] = person;
    this.populateList();
  }

  populateList() {
    this.friendList = this.personList.filter((f) => f.isFriend);
    this.nonFriendList = this.personList.filter((f) => !f.isFriend);
  }
}
