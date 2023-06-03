import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { CartProducts } from "../../../components";
import { useCartContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";
import { EmptyCartPage } from "../../CartPage/EmptyCart";

export const OrderContent = () => {
  const { currentSale } = useCartContext();
  return (
    <Box
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
      sx={{
        ...BoxSx,
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        minHeight: 562,
      }}
    >
      <Typography variant="h6">3. Revisar itens</Typography>

      {currentSale.length ? <CartProducts isCheckoutPage /> : <EmptyCartPage />}
    </Box>
  );
};
