import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ITable } from 'src/app/types';
import { HttpService } from 'src/app/services/service';
@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss'],
})
export class LoggedinComponent implements OnInit {
  responseData:any
  responseDataArray: ITable[] = [];
  constructor(private http: HttpService, private httpclient: HttpClient) {}
  validateToken: string = this.http.AccessToken;
  ngOnInit(): void {
    if (this.validateToken) {
      this.httpclient
        .get('http://www.mocky.io/v2/5ea172973100002d001eeada')
        .subscribe((Response) => {
       
          this.responseData = Response;
          console.log(this.responseData);
          this.responseDataArray = this.responseData.list;
        });
    }
    else{
      alert('Token is not Valid');
      
    }
  }
}
