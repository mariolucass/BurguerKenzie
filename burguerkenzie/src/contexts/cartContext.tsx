import { Children, ProductInterface } from "../interfaces";
import { createContext, useContext, useState } from "react";

interface CartContextProps {
  currentSale: ProductInterface[];
  setCurrentSale: React.Dispatch<React.SetStateAction<ProductInterface[]>>;
}

const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: Children) => {
  const [currentSale, setCurrentSale] = useState<ProductInterface[]>([]);
  return (
    <CartContext.Provider value={{ currentSale, setCurrentSale }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
