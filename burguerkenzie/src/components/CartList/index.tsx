import { Divider } from "@mui/material";
import { useCartContext } from "../../contexts";
import { CartPageProduct } from "../CartPageProduct";
import { CartProduct } from "../CartProduct";
import { CartList } from "./styles";

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
