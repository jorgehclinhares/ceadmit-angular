export interface AuthResponse {
  data: AuthData;
}

export interface AuthData {
  user: User;
  permissions: number[];
  token: string;
}

export interface User {
  id: number;
  identifier: string;
}
