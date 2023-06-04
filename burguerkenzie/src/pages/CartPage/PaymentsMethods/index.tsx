import { Box, Divider, ListItem, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Amex from "../../../assets/Payments/Amex.svg";
import ApplePay from "../../../assets/Payments/ApplePay.svg";
import GooglePay from "../../../assets/Payments/GooglePay.svg";
import Mastercard from "../../../assets/Payments/Mastercard.svg";
import PayPal from "../../../assets/Payments/PayPal.svg";
import Visa from "../../../assets/Payments/Visa.svg";
import { useMediaContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";
import { ListPayments } from "./styles";

export const PaymentsMethods = () => {
  const { hasMinWidth900 } = useMediaContext();

  const listPayments = [PayPal, Amex, GooglePay, Mastercard, Visa, ApplePay];

  const imgSx = {
    p: 0,
    m: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
  };

  const renderList = listPayments.map((elem) => (
    <ListItem key={elem} sx={{ p: 0, width: "128px", height: "32px" }}>
      <Box component={"img"} src={elem} sx={imgSx} />
    </ListItem>
  ));

  return (
    <Box
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
      sx={{
        ...BoxSx,
        display: "flex",
        gap: "1em",
        flexDirection: "column",
      }}
    >
      <Typography
        variant="h6"
        sx={{
          fontWeight: "bold",
          textAlign: hasMinWidth900 ? "left" : "center",
        }}
      >
        Métodos de pagamento
      </Typography>

      <Divider />

      <ListPayments>{renderList}</ListPayments>
    </Box>
  );
};
