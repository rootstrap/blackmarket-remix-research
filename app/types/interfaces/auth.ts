export interface LoginResponse {
  access_token: string;
  refresh_token: string;
  user: User;
}

export interface SignupResponse {
  detail: string;
}

export interface User {
  pk: number;
  email: string;
  first_name: null;
  last_name: null;
}
