import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../DTO/email';

@Injectable({
  providedIn: 'root'
})
export class UserRequestService {
  private URL: string = 'http://localhost:8090';
  private corsOptions = {
    headers: new HttpHeaders({
      'Access-Control-Allow-Origin':  '*',
    })
  };
  constructor(private http: HttpClient) {}

  createNewSearchRequest(searchQuery: string) {
    return this.http.post(this.URL + '/search/create', {searchQuery}, this.corsOptions);
  }

  getEmailInfo(searchJobId: string) {
    return this.http.get<any>(this.URL + `/emailing/get/${searchJobId}`, this.corsOptions);
  }

  sendEmail(email: Email) {
    return this.http.post(this.URL + `/emailing/send`, email, this.corsOptions);
  }

  createUserRequest(email: string, searchQuery: string) {
    return this.http.post<any>(this.URL + `/userRequest/create/${email}`, {searchQuery}, this.corsOptions);
  }

  executeRequest(userRequestId: string) {
    return this.http.get(this.URL + `/userRequest/execute/${userRequestId}`, this.corsOptions);
  }

  getJobsList(userRequestId: string) {
    return this.http.get<any[]>(this.URL + `/userRequest/getJobsList/${userRequestId}`, this.corsOptions);
  }

  getRequestList(email: string) {
    return this.http.get<any[]>(this.URL + `/userRequest/getList/${email}`, this.corsOptions);
  }

  refreshHostStatus() {
    return this.http.get(this.URL + `/userRequest/knownHostStatusRefresh`, this.corsOptions);
  }

  resetRequest(userRequestId: string) {
    return this.http.get(this.URL + `/userRequest/reset/${userRequestId}`, this.corsOptions);
  }

  updateJobStatus(searchJobStatusId: number, siteStatus: string) {
    return this.http.get(this.URL + `/userRequest/updateSearchJobStatus/${searchJobStatusId}/${siteStatus}`, this.corsOptions);
  }
}
