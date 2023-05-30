import { Children } from "../interfaces";
import { createContext, useContext, useState } from "react";

interface iContextProvider {
  openMenu: boolean;
  toggleMenu: () => void;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

const ModalContext = createContext({} as iContextProvider);

export const useModalContext = () => {
  return useContext(ModalContext);
};

export const ModalProvider = ({ children }: Children) => {
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu(!openMenu);
  const handleOpenMenu = () => setOpenMenu(true);
  const handleCloseMenu = () => setOpenMenu(false);

  return (
    <ModalContext.Provider
      value={{
        openMenu,
        toggleMenu,
        handleOpenMenu,
        handleCloseMenu,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
