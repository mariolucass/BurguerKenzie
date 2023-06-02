import { createContext, useContext, useState } from "react";
import { Children } from "../interfaces";

interface iContextProvider {
  openMenu: boolean;
  toggleMenu: () => void;
  handleOpenMenu: () => void;
  handleCloseMenu: () => void;
}

const ModalContext = createContext({} as iContextProvider);

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

export const useModalContext = () => useContext(ModalContext);
