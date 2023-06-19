import { Divider } from "@mui/material";
import { Fragment } from "react";
import { useCartContext } from "../../contexts";
import { ProductCartInterfaceProps } from "../../interfaces/products";
import { CartPageProduct } from "../CartPageProduct";
import { CartProduct } from "../CartProduct";
import { CheckoutPageProduct } from "../CheckoutPageProduct";
import { CartList } from "./styles";
interface CartProps {
  isCartPage?: boolean;
  isCheckoutPage?: boolean;
}
const transitionItem = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] };
const transitionList = {
  staggerChildren: 0.15,
  staggerDirection: 1,
};

const listMenuVariant = {
  initial: { y: -100 },
  animate: {
    y: 0,
    transition: transitionList,
  },
};
const itemMenuVariant = {
  initial: { x: -500 },
  animate: {
    x: 0,
    transition: transitionItem,
  },
};

export const CartProducts = ({ isCartPage, isCheckoutPage }: CartProps) => {
  const { currentSale } = useCartContext();

  const RenderProduct = ({ product }: ProductCartInterfaceProps) => {
    const props = { key: product.id, product, variants: itemMenuVariant };

    if (isCheckoutPage) {
      return <CheckoutPageProduct {...props} />;
    }
    if (isCartPage) {
      return <CartPageProduct {...props} />;
    }
    return <CartProduct {...props} />;
  };

  const renderCartProducts = currentSale.map((product, index) => (
    <Fragment key={product.id}>
      <RenderProduct product={product} />
      {index != currentSale.length - 1 && <Divider flexItem component="li" />}
    </Fragment>
  ));

  return (
    <CartList initial="initial" animate="animate" variants={listMenuVariant}>
      {renderCartProducts}
    </CartList>
  );
};
