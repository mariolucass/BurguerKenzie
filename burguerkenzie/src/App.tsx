import { ToastContainer } from "react-toastify";
import { RoutesMain } from "./router";
import { GlobalStyle } from "./styles/global";

import "react-credit-cards/es/styles-compiled.css";
import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <>
    <RoutesMain />
    <GlobalStyle />
    <ToastContainer />
  </>
);
