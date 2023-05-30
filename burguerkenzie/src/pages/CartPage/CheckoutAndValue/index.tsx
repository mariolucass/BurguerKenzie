import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import { useCartContext } from "../../../contexts";
import { monetizeString } from "../../../utils/utils";
import { motion } from "framer-motion";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";
import { useNavigate } from "react-router-dom";

export const CheckoutAndValue = () => {
  const navigate = useNavigate();
  const { currentSaleValue } = useCartContext();

  return (
    <Box
      sx={{
        p: 6,
        borderRadius: 1,
        height: 352,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Stack direction="column" alignItems={"flex-start"} spacing={2}>
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          Subtotal:
        </Typography>

        <Typography variant="h4" sx={{ color: "#27ae60", fontWeight: "500" }}>
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
