import { Component, OnInit } from '@angular/core';
import {UserStorageService} from "./services/user-storage.service";
import {UserRequestService} from "./services/user-request.service";

@Component({
  selector: 'app-main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.css']
})
export class MainAppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
