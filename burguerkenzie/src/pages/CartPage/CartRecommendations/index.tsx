import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";
import { ProductsRecommendations } from "./ProductsCarrousel";

export const CartPageRecommendations = () => {
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
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "600" }}>
        Recomendações
      </Typography>

      <Divider />

      <ProductsRecommendations />
    </Box>
  );
};
