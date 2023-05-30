import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../../contexts";
import { CartInteractionsDiv } from "./styles";
import { Button } from "@mui/material";

export const CartInteractions = () => {
  const navigate = useNavigate();

  const { setCurrentSale, setOpenCart } = useCartContext();

  const handleRemoveAllProducts = () => setCurrentSale([]);
  const handleRedirectToCheckout = () => {
    navigate("/cart");
    setOpenCart(false);
  };

  return (
    <CartInteractionsDiv>
      <Button variant="contained" onClick={handleRedirectToCheckout}>
        Finalizar Compra
      </Button>

      <Button variant="outlined" onClick={handleRemoveAllProducts}>
        Remover Todos
      </Button>
    </CartInteractionsDiv>
  );
};
