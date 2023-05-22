import { Children } from "../interfaces";
import { CartProvider } from "./cartContext";
import { ProductsProvider } from "./productsContext";

export const AllContexts = ({ children }: Children) => (
  <ProductsProvider>
    <CartProvider>{children}</CartProvider>;
  </ProductsProvider>
);

export * from "./cartContext";
export * from "./productsContext";
