import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { CartProducts } from "../../../components";
import { useCartContext } from "../../../contexts";
import { EmptyCartPage } from "../../CartPage/EmptyCart";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

export const OrderContent = () => {
  const { currentSale } = useCartContext();
  return (
    <Box
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
      sx={{
        p: 6,
        borderRadius: 1,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        minHeight: 562,
      }}
    >
      <Typography variant="h6">3. Revisar itens</Typography>

      {currentSale.length ? <CartProducts isPage /> : <EmptyCartPage />}
    </Box>
  );
};
