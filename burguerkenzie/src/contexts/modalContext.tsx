import { createContext, useContext, useState } from "react";
import { Children } from "../interfaces";

interface iContextProvider {
  openMenu: boolean;

  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

const ModalContext = createContext({} as iContextProvider);

export const ModalProvider = ({ children }: Children) => {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);
  return (
    <ModalContext.Provider
      value={{
        openMenu,
        handleOpenMenu,
        handleCloseMenu,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = () => useContext(ModalContext);
