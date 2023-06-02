import { createContext, useContext, useState } from "react";
import { Children } from "../interfaces";

interface iContextProvider {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;

  address: Address;
  setAddress: React.Dispatch<React.SetStateAction<Address>>;
}

const UserContext = createContext({} as iContextProvider);

interface IUser {
  image?: string;
  username: string;
  email: string;
  phone: string;
}

interface Address {
  cep: string;
  street: string;
  number?: string;
  district: string;
  city: string;
  state: string;
}

export const UserProvider = ({ children }: Children) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  const [address, setAddress] = useState<Address>({
    cep: "",
    city: "",
    district: "",
    state: "",
    street: "",
  } as Address);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        address,
        setAddress,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
