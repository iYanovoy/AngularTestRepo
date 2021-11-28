import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../services/user-storage.service';
import { UserRequestService } from '../services/user-request.service';
import {ActivatedRoute, Router } from '@angular/router';
import { Email } from '../DTO/email';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit {
  email: Email = null as any;

  private user: any;
  private jobId: string = '';

  constructor(private userStorageService: UserStorageService,
              private userRequestService: UserRequestService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = this.userStorageService.getUserInfo();
    this.route.queryParams.subscribe(params => {
      this.jobId = params['jobId'];

      this.userRequestService.getEmailInfo(this.jobId).subscribe((emailInfo) => {
        this.email = emailInfo;
      })
    });
  }

  sendEmail() {
    this.userRequestService.sendEmail(this.email).subscribe(() => {
      this.router.navigate(['../user-profile']);
    });
  }
}
