import { RoutesMain } from "./router";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "react-credit-cards/es/styles-compiled.css";

export const App = () => (
  <>
    <RoutesMain />
    <GlobalStyle />
    <ToastContainer />
  </>
);
