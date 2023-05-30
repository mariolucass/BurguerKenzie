import { CartList } from "./styles";
import { CartProduct } from "../CartProduct";
import { useCartContext } from "../../contexts";
import { CartPageProduct } from "../CartPageProduct";
import { Divider } from "@mui/material";

interface CartProps {
  isPage?: boolean;
}

export const CartProducts = ({ isPage }: CartProps) => {
  const { currentSale } = useCartContext();

  const renderCartProducts = currentSale.map((elem) => {
    return (
      <>
        {isPage ? (
          <CartPageProduct key={elem.id} product={elem} />
        ) : (
          <CartProduct key={elem.id} product={elem} />
        )}

        <Divider flexItem component="li" />
      </>
    );
  });

  return <CartList>{renderCartProducts}</CartList>;
};
