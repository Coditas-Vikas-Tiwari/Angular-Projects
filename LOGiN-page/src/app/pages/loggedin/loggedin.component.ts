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
  li!: any;
  lis: ITable[] = [];
  constructor(private http: HttpService, private http1: HttpClient) {}
  validateToken: string = this.http.AccessToken;
  ngOnInit(): void {
    if (this.validateToken) {
      this.http1
        .get('http://www.mocky.io/v2/5ea172973100002d001eeada')
        .subscribe((Response) => {
          console.log(Response);
          this.li = Response;
          this.lis = this.li.list;
        });
    }
  }
}
