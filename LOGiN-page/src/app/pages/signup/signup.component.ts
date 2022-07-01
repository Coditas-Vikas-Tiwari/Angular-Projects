import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpService } from 'src/app/services/service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

isSignedUp:boolean = false;

@Output() signedUp = new EventEmitter();
  form!:FormGroup;
  constructor(public fb: FormBuilder, private httpService:HttpService) { }
  ngOnInit(): void {
    this.form = this.fb.group({
      name : new FormControl(),
      email: new FormControl(),
      password: new FormControl()
    })
  }

  onSubmit(signupDetails:FormGroup){
    this.httpService.saveDetails(signupDetails.value.name,signupDetails.value.email,signupDetails.value.password);
    this.isSignedUp = true;

  this.signedUp.emit(this.isSignedUp);
  }
  goToLogin(){
    this.isSignedUp = false;
    this.signedUp.emit(this.isSignedUp);
  }

}
