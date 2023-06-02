import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Cards from "react-credit-cards";
import { useCartContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";
import { CardDiv } from "./styles";

export const PaymentContent = () => {
  const { card } = useCartContext();

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
        minHeight: 200,
      }}
    >
      <Typography variant="h6">2. Método de pagamento</Typography>

      <CardDiv>
        <Cards
          placeholders={{ name: "SEU NOME AQUI" }}
          locale={{ valid: "valido até" }}
          cvc={card.cvc}
          expiry={card.expiry}
          name={card.name}
          number={card.number}
        />
      </CardDiv>
    </Box>
  );
};
