export interface RegisterUserResponse {
  success: boolean;
  message: string;
  createdUser: CreatedUser;
}

export interface CreatedUser {
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

export interface RegisterUserData {
  name: string;
  email: string;
  password: string;
}

// export const API_ENDPOINT = "http://localhost:4000/api/v1";

export const API_ENDPOINT =
  "https://code-snippet-backend-2wx1.onrender.com/api/v1";
