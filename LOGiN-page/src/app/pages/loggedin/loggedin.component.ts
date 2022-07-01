import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpClientModule} from '@angular/common/http';
import { ITable } from 'src/app/types';
@Component({
  selector: 'app-loggedin',
  templateUrl: './loggedin.component.html',
  styleUrls: ['./loggedin.component.scss']
})
export class LoggedinComponent implements OnInit {

  li!:any;
 lis:ITable[] = [];
  constructor(private http:HttpClient) { }
  ngOnInit(): void {

    this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')
    .subscribe(Response => {
    
      console.log(Response)
      this.li=Response;
      this.lis=this.li.list;
    
    }
    );

  }
  }


