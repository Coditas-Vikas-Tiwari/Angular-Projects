import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'LOGiN-page';
isSigned:boolean =false;
isLogIn:boolean = false;
  checkUserSignedUp(isSignedUp:boolean){
this.isSigned = isSignedUp;
  }

  checkUserLogIn(isLogIn:boolean){
    if(isLogIn){
this.isLogIn = isLogIn;
    }
  }
}
