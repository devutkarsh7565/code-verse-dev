export interface ICurrentUser {
  user: User;
}

export interface User {
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
  avatar?: string;
}
