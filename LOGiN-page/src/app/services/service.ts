import { Injectable } from "@angular/core";
import { IDetails, ILogin, IResult } from "../types";
import { HttpClient } from "@angular/common/http";
import { ISignup } from "../types";
import { HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";



@Injectable({
    providedIn:'root',
})
export class HttpService {
    key1:string = 'userName';
    key2:string = 'userEmail';
    key3: string = 'userPassword';
    token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjllZGI4YmI5YWJiYmQwYTVjMDMwMTYiLCJuYW1lIjoidmlrYXMgdGl3YXJpIiwiZW1haWwiOiJ2aWthc3Rpd2FyaTcwODQwOUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYSQxMiR1L3ZDOER6NW5qUTZ4YjhHRlNXQ1EuMUt3bzJWSlg4aUEvQmhsY0g5MnZ2SlpPZ2E4T2p2RyIsInJvbGUiOiI2Mjk5YjRmZmUzZDIwMDRjMGE1NDVjMzIiLCJpYXQiOjE2NTY4MzUyODUsImV4cCI6MTY1NjkyMTY4NX0.lLo9dCcVvT3-JKCh-jMLHutgBc2OFpsxykNlITD8rw8";
    result!:IResult;
    getToken!:IResult
    
  baseUrl = "https://forms-47.herokuapp.com/";
  userName!: string;
  userEmail!: string;
  userPassword!: string;
  AccessToken:string = ''
    constructor(private http:HttpClient){}
     httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          Authorization: 'token'
        })
      };

    saveDetails(data:ISignup):Observable<ISignup>{
        console.log('hello')
       return this.http.post<ISignup>(`${this.baseUrl}user/register`,data, this.httpOptions);

        // localStorage.setItem(this.key1,name);
        // localStorage.setItem(this.key2,email);
        // localStorage.setItem(this.key3,password);
       
    }

    login(data:ILogin):Observable<any> {
       return this.http.post(`${this.baseUrl}user/login`,data,this.httpOptions);
        
    }
    authenticateToken(token:string){

         localStorage.setItem('token',token);
         this.AccessToken = localStorage.getItem('token')!;
         console.log(this.AccessToken);
    }


   
}