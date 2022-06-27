import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { IPeople } from 'src/app/app.types';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent implements OnInit {
  constructor() {}
  @Input() personList: IPeople[] = [];
  @Output() changeStatus = new EventEmitter<IPeople>();
  async ngOnInit() {}

  changeFriendStatus(person: IPeople) {
    this.changeStatus.emit(person);
  }
}
