import { toast } from "react-toastify";
import {
  Children,
  ProductCartInterface,
  ProductInterface,
} from "../interfaces";
import { createContext, useContext, useState } from "react";
import { useProductsContext } from "./productsContext";

interface CartContextProps {
  currentSale: ProductCartInterface[];
  setCurrentSale: React.Dispatch<React.SetStateAction<ProductCartInterface[]>>;

  handleAddToCart: (id: number) => void;
  handleRemoveFromCart: (id: number) => void;

  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: Children) => {
  const { products } = useProductsContext();
  const [currentSale, setCurrentSale] = useState<ProductCartInterface[]>([]);
  const [openCart, setOpenCart] = useState(false);

  const handleAddToCart = (id: number) => {
    const productToAdd = products.find((e) => e.id === id);
    if (productToAdd) {
      const productIsInCart = currentSale.find((e) => e.id === id);

      if (productIsInCart) {
        productIsInCart.quantity = productIsInCart.quantity + 1;
      } else {
        const productWithQuantity = {
          ...productToAdd,
          quantity: 1,
        };

        setCurrentSale((cartList) => [...cartList, productWithQuantity]);
      }

      setOpenCart(true);
    }
  };

  const handleRemoveFromCart = (id: number) => {
    const productToRemove = currentSale.find((e) => e.id === id);
    const productIndex = currentSale.indexOf(productToRemove!);

    currentSale.length === 1
      ? setCurrentSale([])
      : setCurrentSale(currentSale.filter((e, i) => i !== productIndex));
  };

  return (
    <CartContext.Provider
      value={{
        currentSale,
        setCurrentSale,

        handleAddToCart,
        handleRemoveFromCart,

        openCart,
        setOpenCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
