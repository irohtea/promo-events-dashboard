export interface User {
  id: string;
  email: string;
  name: string;
}

export interface SignUpRequest {
  email: string;
  password: string;
  name: string;
}