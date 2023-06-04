import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useCartContext, useMediaContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";
import { monetizeString } from "../../../utils/utils";

export const CheckoutAndValue = () => {
  const navigate = useNavigate();
  const { currentSaleValue } = useCartContext();
  const { hasMinWidth900 } = useMediaContext();

  return (
    <Box
      sx={{
        ...BoxSx,
        height: 352,
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Stack
        direction="column"
        alignItems={hasMinWidth900 ? "flex-start" : "center"}
        spacing={2}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Subtotal:
        </Typography>

        <Typography variant="h4" color="#27ae60" sx={{ fontWeight: "500" }}>
          {monetizeString(currentSaleValue)}
        </Typography>
      </Stack>

      <Divider />

      <Button
        sx={{ backgroundColor: "#27ae60" }}
        variant="contained"
        onClick={() => navigate("/cart/checkout")}
      >
        Continuar
      </Button>
    </Box>
  );
};
