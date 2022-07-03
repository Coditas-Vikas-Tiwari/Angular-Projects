import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpService } from 'src/app/services/service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  isSignedUp: boolean = false;

  @Output() signedUp = new EventEmitter();
  form!: FormGroup;
  constructor(public fb: FormBuilder, private httpService: HttpService) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl(),
    });
  }

  onSubmit(signupDetails: FormGroup) {
console.log(signupDetails)
    if(signupDetails.value.name && signupDetails.value.email && signupDetails.value.password && signupDetails.value.confirmPassword)
{
  this.httpService.saveDetails(signupDetails.value).subscribe((res) => {
    alert('Thank for signing in');
  });

  this.isSignedUp = true;

  this.signedUp.emit(this.isSignedUp);
}

else{
  alert('Please fill all the filed');

   
  }}
  goToLogin() {
    this.isSignedUp = true;
    this.signedUp.emit(this.isSignedUp);
  }

}
