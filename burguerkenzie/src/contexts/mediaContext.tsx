import useMediaQuery from "@mui/material/useMediaQuery";
import { createContext, useContext } from "react";
import { Children } from "../interfaces";

interface iContextProvider {
  hasMinWidth320: boolean;
  hasMinWidth480: boolean;
  hasMinWidth600: boolean;
  hasMinWidth768: boolean;
  hasMinWidth900: boolean;
  hasMinWidth1024: boolean;
  hasMinWidth1200: boolean;
}

const MediaContext = createContext({} as iContextProvider);

export const MediaProvider = ({ children }: Children) => {
  const hasMinWidth320 = useMediaQuery("(min-width:321px)");
  const hasMinWidth480 = useMediaQuery("(min-width:481px)");
  const hasMinWidth600 = useMediaQuery("(min-width:601px)");
  const hasMinWidth768 = useMediaQuery("(min-width:769px)");
  const hasMinWidth900 = useMediaQuery("(min-width:901px)");
  const hasMinWidth1024 = useMediaQuery("(min-width:1026px)");
  const hasMinWidth1200 = useMediaQuery("(min-width:1201px)");

  return (
    <MediaContext.Provider
      value={{
        hasMinWidth320,
        hasMinWidth480,
        hasMinWidth600,
        hasMinWidth768,
        hasMinWidth900,
        hasMinWidth1024,
        hasMinWidth1200,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
};

export const useMediaContext = () => useContext(MediaContext);
