import { Injectable } from '@angular/core';
import { backendStudentList } from 'src/backend/backend';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor() {}

  async getStudentList() {
    // mock call to the backend
    const studentList = await backendStudentList();

    return studentList;
  }

}
