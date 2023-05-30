import { motion } from "framer-motion";
import { EmptyCartPage } from "../EmptyCart";
import { useCartContext } from "../../../contexts";
import { CartProducts } from "../../../components";
import { Box, Divider, Typography } from "@mui/material";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

export const CartPageContent = () => {
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
      <Typography variant="h4" sx={{ fontWeight: "600" }}>
        Carrinho de Compras ({currentSale.length})
      </Typography>

      <Divider />

      {currentSale.length ? <CartProducts isPage /> : <EmptyCartPage />}

      <Divider />
    </Box>
  );
};
