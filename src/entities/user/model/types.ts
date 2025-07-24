export interface User {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

export interface SignUpRequest {
  name: string;
  email: string;
  password: string;
}

export interface SignInRequest {
  email: string;
  password: string;
}