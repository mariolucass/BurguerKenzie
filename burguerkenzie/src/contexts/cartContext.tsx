import { createContext, useContext, useEffect, useState } from "react";
import { CardInterface, Children, ProductCartInterface } from "../interfaces";
import { useProductsContext } from "./productsContext";

interface CartContextProps {
  currentSale: ProductCartInterface[];
  setCurrentSale: React.Dispatch<React.SetStateAction<ProductCartInterface[]>>;

  handleAddToCart: (id: number) => void;
  handleRemoveFromCart: (id: number) => void;
  handleQuantity: (id: number, quantity: number) => void;

  openCart: boolean;
  setOpenCart: React.Dispatch<React.SetStateAction<boolean>>;

  currentSaleValue: number;

  card: CardInterface;
  setCard: React.Dispatch<React.SetStateAction<CardInterface>>;
}

const CartContext = createContext({} as CartContextProps);

export const CartProvider = ({ children }: Children) => {
  const { products } = useProductsContext();
  const [currentSale, setCurrentSale] = useState<ProductCartInterface[]>([]);
  const [currentSaleValue, setCurrentSaleValue] = useState(0);
  const [openCart, setOpenCart] = useState(false);
  const [card, setCard] = useState<CardInterface>({
    cvc: "",
    expiry: "",
    focus: "number",
    name: "",
    number: "",
  });
  const handleTotalValue = () => {
    const totalValue = +currentSale
      .reduce((acc, e) => acc + e.price * e.quantity, 0)
      .toFixed(2);

    setCurrentSaleValue(totalValue);
  };

  useEffect(() => handleTotalValue(), [currentSale]);

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
      handleTotalValue();
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

  const handleQuantity = (id: number, quantity: number) => {
    const productToChangeQuantity = currentSale.find((e) => e.id === id);
    const productIndex = currentSale.indexOf(productToChangeQuantity!);

    currentSale[productIndex].quantity = quantity;
    handleTotalValue();
  };

  return (
    <CartContext.Provider
      value={{
        currentSale,
        setCurrentSale,
        currentSaleValue,

        handleAddToCart,
        handleRemoveFromCart,
        handleQuantity,

        openCart,
        setOpenCart,

        card,
        setCard,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => useContext(CartContext);
