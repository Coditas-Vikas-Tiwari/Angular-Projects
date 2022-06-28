import { Component } from '@angular/core';
import { IRating } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rating';
  displayOptionObject!:IRating[];

  getOptions(optionObject:IRating|any){
    this.displayOptionObject = optionObject;
    console.log(this.displayOptionObject);
    return optionObject;
  }

}
