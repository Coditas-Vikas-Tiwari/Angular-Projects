import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { IRating } from '../types';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit{
  @Input() optionObject!:IRating;

  constructor() { }
 
  ngOnInit(): void {
  }

}
