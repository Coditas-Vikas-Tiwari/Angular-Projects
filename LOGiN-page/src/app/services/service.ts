import { Injectable } from "@angular/core";
import { IDetails } from "../types";
@Injectable({
    providedIn:'root',
})
export class HttpService {
    key1:string = 'userName';
    key2:string = 'userEmail';
    key3: string = 'userPassword';
  userName!: string;
  userEmail!: string;
  userPassword!: string;
    constructor(){}

    saveDetails(name:string,email:string,password:string){
        localStorage.setItem(this.key1,name);
        localStorage.setItem(this.key2,email);
        localStorage.setItem(this.key3,password);
       
    }
    getEmail(){
        this.userEmail = localStorage.getItem(this.key2)!;
        return this.userEmail;
    }

    getPassword(){
        this.userPassword = localStorage.getItem(this.key3)!;
        return this.userPassword;
    }

   
}