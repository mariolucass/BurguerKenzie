import { RoutesMain } from "./router";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <>
    <RoutesMain />
    <GlobalStyle />
    <ToastContainer />
  </>
);
