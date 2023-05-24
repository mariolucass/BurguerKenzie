import { BoxSx, FontSx } from "../styles";
import { useCartContext } from "../../../contexts";
import { monetizeString } from "../../../utils/utils";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

interface IProps {
  id: number;
  price: number;
}

export const ProductCheckout = ({ id, price }: IProps) => {
  const { handleAddToCart } = useCartContext();

  return (
    <Box
      sx={{ ...BoxSx, display: "flex", flexDirection: "column", gap: 2 }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Typography sx={FontSx}>Apenas</Typography>
      <Typography
        variant="h2"
        sx={{ ...FontSx, color: "#27ae60", fontWeight: "500" }}
      >
        {price ? monetizeString(price) : "Loading..."}
      </Typography>

      <Button
        sx={{ backgroundColor: "#27ae60" }}
        variant="contained"
        onClick={() => handleAddToCart(id)}
      >
        Adicionar ao carrinho
      </Button>
    </Box>
  );
};