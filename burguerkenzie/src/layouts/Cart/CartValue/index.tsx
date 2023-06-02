import { Typography } from "@mui/material";
import { useCartContext } from "../../../contexts";
import { monetizeString } from "../../../utils/utils";
import { CartValueDiv } from "./styles";

export const CartValue = () => {
  const { currentSaleValue } = useCartContext();

  return (
    <CartValueDiv>
      <Typography>Total:</Typography>
      <Typography variant="h4" color="#27ae60" sx={{ fontWeight: "500" }}>
        {monetizeString(currentSaleValue)}
      </Typography>
    </CartValueDiv>
  );
};
