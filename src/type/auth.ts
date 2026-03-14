export interface User {
  id: number;
  username: string;
  email?: string;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface LoginResponse {
  type: string;
  token?: string;
  user?: User;
  message?: string;
}