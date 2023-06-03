import { Divider } from "@mui/material";
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

export const CartProducts = ({ isCartPage, isCheckoutPage }: CartProps) => {
  const { currentSale } = useCartContext();

  const RenderProduct = ({ product }: ProductCartInterfaceProps) => {
    const props = { key: product.id, product };

    if (isCheckoutPage) {
      return <CheckoutPageProduct {...props} />;
    }

    if (isCartPage) {
      return <CartPageProduct {...props} />;
    }

    return <CartProduct {...props} />;
  };

  const renderCartProducts = currentSale.map((product, index) => (
    <>
      <RenderProduct product={product} />
      {index != currentSale.length - 1 && <Divider flexItem component="li" />}
    </>
  ));

  return <CartList>{renderCartProducts}</CartList>;
};
