import { ThemeProvider } from "@mui/material";
import { Children } from "../interfaces";
import { theme } from "../libs/mui";
import { CartProvider } from "./cartContext";
import { MediaProvider } from "./mediaContext";
import { ModalProvider } from "./modalContext";
import { ProductsProvider } from "./productsContext";
import { UserProvider } from "./userContext";

export { useCartContext } from "./cartContext";
export { useMediaContext } from "./mediaContext";
export { useModalContext } from "./modalContext";
export { useProductsContext } from "./productsContext";
export { useUserContext } from "./userContext";
export const AllContexts = ({ children }: Children) => (
  <ThemeProvider theme={theme}>
    <MediaProvider>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <ModalProvider>{children}</ModalProvider>
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </MediaProvider>
  </ThemeProvider>
);
