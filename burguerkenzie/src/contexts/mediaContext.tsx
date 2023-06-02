import useMediaQuery from "@mui/material/useMediaQuery";
import { createContext, useContext } from "react";
import { Children } from "../interfaces";

interface iContextProvider {
  matches320: boolean;
  matches480: boolean;
  matches600: boolean;
  matches768: boolean;
  matches900: boolean;
  matches1024: boolean;
  matches1200: boolean;
}

const MediaContext = createContext({} as iContextProvider);

export const MediaProvider = ({ children }: Children) => {
  const matches320 = useMediaQuery("(min-width:320px)");
  const matches480 = useMediaQuery("(min-width:480px)");
  const matches600 = useMediaQuery("(min-width:600px)");
  const matches768 = useMediaQuery("(min-width:768px)");
  const matches900 = useMediaQuery("(min-width:900px)");
  const matches1024 = useMediaQuery("(min-width:1024px)");
  const matches1200 = useMediaQuery("(min-width:1200px)");

  return (
    <MediaContext.Provider
      value={{
        matches320,
        matches480,
        matches600,
        matches768,
        matches900,
        matches1024,
        matches1200,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMediaContext = () => useContext(MediaContext);
