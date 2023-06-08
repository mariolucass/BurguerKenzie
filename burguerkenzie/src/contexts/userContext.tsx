import { createContext, useContext, useEffect, useState } from "react";
import { Children } from "../interfaces";
import { IUser } from "../interfaces/user";

interface iContextProvider {
  user: IUser;
  setUser: React.Dispatch<React.SetStateAction<IUser>>;
}

const UserContext = createContext({} as iContextProvider);

export const UserProvider = ({ children }: Children) => {
  const [user, setUser] = useState<IUser>({} as IUser);
  useEffect(() => getProfileIfHasToken(), []);
  const getProfileIfHasToken = () => {
    const token = localStorage.getItem("burguerKenzie:user");
    if (token) {
      const data = JSON.parse(token);
      setUser(data);
    }
  };
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
