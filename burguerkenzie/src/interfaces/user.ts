export interface IUser {
  image?: string;
  username: string;
  email: string;
  phone: string;
}

export interface Address {
  cep: string;
  street: string;
  number?: number;
  district: string;
  city: string;
  state: string;
}
