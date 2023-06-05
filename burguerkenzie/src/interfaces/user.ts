export interface IUser {
  image?: string;
  username: string;
  email: string;
  phone: string;

  address: {
    cep: string;
    street: string;
    number?: string | number;
    district: string;
    city: string;
    state: string;
  };
}
