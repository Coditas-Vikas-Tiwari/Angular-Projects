import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
@ViewChild("aboutContent") about!: ElementRef;
@ViewChild("login") login!: ElementRef;
@ViewChild("returnHome") home!: ElementRef;
@ViewChild("emailInput") emailInput!: ElementRef;
@ViewChild("password") passwordInput!: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }
checkUser(email:string, password:string) {
this.emailInput.nativeElement.value = '';
this.passwordInput.nativeElement.value = '';
  if(email === "vikas@gmail.com" && password === "12345"){
    this.about.nativeElement.classList.add('about-content-visible');
    this.login.nativeElement.classList.add('visible-hidden');
  }
}

changeClass(event:Event) {
const dataType = event.target as HTMLElement;
let type = dataType.getAttribute('data-type');

if(type === 'about'){
  this.home.nativeElement.classList.add('visible');
this.about.nativeElement.classList.remove('about-content-visible');
}
else if(type === 'returnHome'){
  this.home.nativeElement.classList.remove('visible');
  this.login.nativeElement.classList.add('visible');
}
}

}
