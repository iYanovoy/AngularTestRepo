import { Job } from './job';

export interface UserRequest {
  applicationUser: {
    email: string;
    password: string;
    userName: string;
  }
  id: number;
  keyword: string;
  status: string;
  jobs: Job[];
}
