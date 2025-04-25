export interface User {
  id: string;
  name: string;
  studentId: string;
  email: string;
}

export interface SignUpResponse {
  message: string;
  data: User;
}

export interface SignUpPayload {
  name: string;
  studentId: string;
  email: string;
  password: string;
}

export interface SignInPayload {
  email: string;
  password: string;
}

export interface SignInResponse {
  message: string;
  data: User;
}

export interface CheckAuthResponse {
  message: string;
  data: User;
}
