import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
 form!:FormGroup;
  constructor(public fb: FormBuilder, private httpService:HttpService) { }
userEmail!:string;
userPassword!:string;
checkUserEmail!:string;
checkUserPassword!:string;
isLogIn:boolean = false;

@Output() loggedIn = new EventEmitter();
  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl(),
      password: new FormControl()
  })
}

onSubmit(loginDetails:FormGroup) {
  console.log(loginDetails.value)
  this.checkUserEmail = this.httpService.getEmail();
 this.checkUserPassword = this.httpService.getPassword();

 if(loginDetails.value.email === this.checkUserEmail && loginDetails.value.password === this.checkUserPassword){
this.isLogIn = true;
 }
 this.loggedIn.emit(this.isLogIn);
}
}
