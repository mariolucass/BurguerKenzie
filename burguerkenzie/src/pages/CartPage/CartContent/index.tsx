import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { CartProducts } from "../../../components";
import { useCartContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";
import { EmptyCartPage } from "../EmptyCart";

export const CartPageContent = () => {
  const { currentSale } = useCartContext();
  return (
    <Box
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
      sx={{
        ...BoxSx,
        minHeight: 562,
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "600" }}>
        Carrinho de Compras ({currentSale.length})
      </Typography>

      <Divider />

      {currentSale.length ? <CartProducts isCartPage /> : <EmptyCartPage />}
    </Box>
  );
};
