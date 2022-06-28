import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IRating } from '../types';
@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss']
})
export class RatingsComponent implements OnInit {
  external:string = '';
  optionObject:object = {};
form!: FormGroup;
   optionArray:IRating[] = [];
@Output() options = new EventEmitter<any>();
  constructor(public fb: FormBuilder) {}

  
  ngOnInit(): void {
    this.form = this.fb.group({
      ambience: new FormControl(),
      cleanlines: new FormControl(),
      service: new FormControl(),
      food: new FormControl()
    });
  }

  onSubmit(ratingForm:FormGroup): void {
  
    if (!this.form.valid) {
      false;
    } else {
     this.optionArray.push(this.form.value);
     this.options.emit(this.optionArray);
       console.log(this.optionArray);
    }
  }


}
