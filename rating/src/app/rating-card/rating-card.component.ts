import { Component, OnInit, Input } from '@angular/core';
import { IRating } from '../types';
@Component({
  selector: 'app-rating-card',
  templateUrl: './rating-card.component.html',
  styleUrls: ['./rating-card.component.scss']
})
export class RatingCardComponent implements OnInit {
  @Input() optionObject!:IRating;
  constructor() { }

  ngOnInit(): void {
  }

}
