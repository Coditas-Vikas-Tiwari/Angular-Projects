import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user-services.service';

@Component({
  selector: 'app-mainview',
  templateUrl: './mainview.component.html',
  styleUrls: ['./mainview.component.scss'],
  providers: [UserService],
})
export class MainviewComponent implements OnInit {

  constructor(private userList: UserService) { }
  ngOnInit(): void {

    
  }
}
