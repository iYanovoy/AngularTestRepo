import { Component, OnInit } from '@angular/core';
import { UserStorageService } from '../services/user-storage.service';
import { UserRequestService } from '../services/user-request.service';
import { UserRequest } from '../DTO/user-request';
import { Job } from '../DTO/job';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  requests: UserRequest[] = [];
  jobs: Map<string, any> = new Map<string, any>();

  private user: any;

  constructor(private userStorageService: UserStorageService, private userRequestService: UserRequestService) { }

  ngOnInit(): void {
    this.user = this.userStorageService.getUserInfo();

    this.requestListOfRequests();
  }

  changeStatus(status: string, jobId: number) {
    this.userRequestService.updateJobStatus(jobId, status).subscribe(() => {
      this.requestListOfRequests();
    });
  }

  private requestListOfRequests() {
    this.userRequestService.getRequestList(this.user.email).subscribe((requests) => {
      requests
        .map((request: UserRequest) => {
          request.jobs = request.jobs
            .sort((prevJob: Job, nextJob: Job) => prevJob.name < nextJob.name ? 1 : -1);

          return request;
        })
        .sort((prevRequest: UserRequest, nextRequest: UserRequest) => prevRequest.id - nextRequest.id);

      this.requests = requests;
    });
  }

}
