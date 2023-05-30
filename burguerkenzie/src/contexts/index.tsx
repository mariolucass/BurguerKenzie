import { ThemeProvider } from "@mui/material";
import { Children } from "../interfaces";
import { CartProvider } from "./cartContext";
import { MediaProvider } from "./mediaContext";
import { ModalProvider } from "./modalContext";
import { ProductsProvider } from "./productsContext";
import { theme } from "../libs/mui";

export const AllContexts = ({ children }: Children) => (
  <MediaProvider>
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <CartProvider>
          <ModalProvider>{children}</ModalProvider>
        </CartProvider>
      </ProductsProvider>
    </ThemeProvider>
  </MediaProvider>
);

export * from "./cartContext";
export * from "./productsContext";
export * from "./modalContext";
export * from "./mediaContext";
