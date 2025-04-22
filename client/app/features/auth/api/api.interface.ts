export interface User {
  id: string;
  name: string;
  studentId: string;
  email: string;
}

export interface SignUpResponse {
  message: string;
  user: User;
}

export interface SignUpPayload {
  name: string;
  studentId: string;
  email: string;
  password: string;
}
