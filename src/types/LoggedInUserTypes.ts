export interface LoggedInUserResponse {
  accessToken: string;
  refreshToken: string;
  loggedInUser: LoggedInUser;
}

export interface LoggedInUser {
  _id: string;
  name: string;
  email: string;
  codeSnippet: any[];
  favourites: any[];
  trash: any[];
  tags: any[];
  createdAt: string;
  updatedAt: string;
  __v: number;
}
