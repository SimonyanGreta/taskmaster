export interface LoginSchema {
  username: string;
  password: string;
  isLoading: boolean;
  error?: string;
}

export interface User {
  id: string;
  username: string;
  avatar?: string;
}

export interface UserSchema {
  authData?: User;
  _mounted: boolean;
}
