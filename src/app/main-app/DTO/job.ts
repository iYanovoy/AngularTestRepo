export interface Job {
  displayUrl: string;
  email: {
    hidden: boolean;
    id: null;
    recipient: string;
    status: string;
    text: string;
  };
  hostUrl: string;
  id: number;
  language: string;
  name: string;
  originalQuery: string;
  siteStatus: string;
  snippet: string;
  userRequest: {
    applicationUser: string;
    id: number;
    jobs: string;
    keyword: string;
    status: string;
  }
}
