import { Component, OnInit } from '@angular/core';
import { IStudent } from './app.types';
import { HttpService } from './services/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private httpService: HttpService) {}
  async ngOnInit() {
    console.log('APP component initialized');

    this.studentList = await this.httpService.getStudentList();
  }


  getRowStyle(marks: number) {
    return {
      green: marks >= 65,
      amber: marks < 65 && marks >= 50,
      red: marks < 50 && marks >= 35,
      maroon: marks < 35
    }
  }
}

