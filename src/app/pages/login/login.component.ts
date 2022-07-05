import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form!:FormGroup
formSubmitted : boolean = false; 
  constructor(public fb:FormBuilder) { }

  ngOnInit(): void {
this.form = this.fb.group({
  email: new FormControl('',[Validators.required, Validators.email]),
  password: new FormControl('',[Validators.required, Validators.minLength(6)])
})
  }

  onSubmit(form:FormGroup){
    if(this.form.valid){
      alert('good');
    }
    else{
      this.formSubmitted = true;
    }
  }

}
