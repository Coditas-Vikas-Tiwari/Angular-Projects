import { Token } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { HttpService } from 'src/app/services/service';
import { ILogin, IResult, IUserDetails } from 'src/app/types';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(public fb: FormBuilder, private httpService: HttpService) {}
  userEmail!: string;
  userPassword!: string;
  checkUserEmail!: string;
  checkUserPassword!: string;
  isLogIn: boolean = false;
  result!: string;
  token!: IResult;

  @Output() loggedIn = new EventEmitter();
  ngOnInit(): void {
    this.form = this.fb.group({
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  onSubmit(loginDetails: FormGroup) {
    this.httpService.login(loginDetails.value).subscribe((res) => {
      this.result = res.data.token;
      this.httpService.authenticateToken(JSON.stringify(this.result));
      this.loggedIn.emit(!this.isLogIn);
    });
  }
}
