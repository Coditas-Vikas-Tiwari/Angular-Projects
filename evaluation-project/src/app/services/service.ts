import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

import { backendStudentList } from 'src/app/backend/backend';



@Injectable({
    providedIn: 'root'
  })
  export class AuthenticationService {
  
    fakeUsername: string = "username";
    fakePassword: string = "password";
  
    constructor() { }
  
    checkUser(username: string, password: string): Observable<any> {
  
      if (username == this.fakeUsername && password == this.fakePassword) {
        localStorage.setItem("token", "my-super-secret-token-from-server");
        return of(new HttpResponse({ status: 200 }));
      } else {
        return of(new HttpResponse({ status: 401 }));
      }
    }
}