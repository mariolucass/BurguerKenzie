import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useCartContext, useProductsContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";
import { monetizeString } from "../../../utils/utils";

interface IProps {
  id: number;
  price: number;
}

export const ProductCheckout = () => {
  const { handleAddToCart } = useCartContext();
  const { productEspecific } = useProductsContext();

  return (
    <Box
      sx={{ ...BoxSx, display: "flex", flexDirection: "column", gap: 2 }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Typography>Apenas</Typography>
      <Typography variant="h2" sx={{ color: "#27ae60", fontWeight: "500" }}>
        {productEspecific.price
          ? monetizeString(productEspecific.price)
          : "Loading..."}
      </Typography>

      <Button
        sx={{ backgroundColor: "#27ae60" }}
        variant="contained"
        onClick={() => handleAddToCart(productEspecific.id)}
      >
        Adicionar ao carrinho
      </Button>
    </Box>
  );
};
