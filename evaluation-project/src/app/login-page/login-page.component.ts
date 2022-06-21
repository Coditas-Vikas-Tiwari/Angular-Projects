import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  
@ViewChild("emailInput") emailInput!: ElementRef;
@ViewChild("password") passwordInput!: ElementRef;
 onLogin = true;
 aboutButtonClicked = false;
  constructor() { }

  ngOnInit(): void {
   
  }
checkUser(email:string, password:string) {
this.emailInput.nativeElement.value = '';
this.passwordInput.nativeElement.value = '';
  if(email === "vikas@gmail.com" && password === "12345"){
this.onLogin=false;
}
}
hideAbout() {
      this.aboutButtonClicked = true; 
}
returnHomePage(){
  this.onLogin=true;
  this.aboutButtonClicked=false;
}



}
