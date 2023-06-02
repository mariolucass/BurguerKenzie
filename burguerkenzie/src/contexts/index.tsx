import { ThemeProvider } from "@mui/material";
import { Children } from "../interfaces";
import { theme } from "../libs/mui";
import { CartProvider } from "./cartContext";
import { MediaProvider } from "./mediaContext";
import { ModalProvider } from "./modalContext";
import { ProductsProvider } from "./productsContext";
import { UserProvider } from "./userContext";

export const AllContexts = ({ children }: Children) => (
  <MediaProvider>
    <ThemeProvider theme={theme}>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <ModalProvider>{children}</ModalProvider>
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </ThemeProvider>
  </MediaProvider>
);

export * from "./cartContext";
export * from "./mediaContext";
export * from "./modalContext";
export * from "./productsContext";
export * from "./userContext";
