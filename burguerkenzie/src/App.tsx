import { RoutesMain } from "./router";
import { AllContexts } from "./contexts";
import { GlobalStyle } from "./styles/global";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

export const App = () => (
  <AllContexts>
    <RoutesMain />

    <GlobalStyle />
    <ToastContainer />
  </AllContexts>
);
