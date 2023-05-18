export interface Authenticate {
  email: string;
  password: string;
}

export interface Register extends Authenticate {
  name: string;
}
