import { Box, Typography } from "@mui/material";
import { useCartContext } from "../../../contexts";
import { monetizeString } from "../../../utils/utils";
import { CartValueDiv } from "./styles";

export const CartValue = () => {
  const { currentSaleValue } = useCartContext();

  return (
    <CartValueDiv>
      <Typography>Total:</Typography>
      <Typography variant="h4" sx={{ color: "#27ae60", fontWeight: "500" }}>
        {monetizeString(currentSaleValue)}
      </Typography>
    </CartValueDiv>
  );
};
