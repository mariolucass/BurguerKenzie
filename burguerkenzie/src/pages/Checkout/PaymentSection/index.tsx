import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Cards from "react-credit-cards";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
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
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6">2. Método de pagamento</Typography>
        {card.cvc ? <Link to="/profile/address">Alterar</Link> : <></>}
      </Box>

      {card.cvc ? (
        <CardDiv>
          <Cards
            cvc={card.cvc}
            expiry={card.expiry}
            name={card.name}
            number={card.number}
          />
        </CardDiv>
      ) : (
        <Link to="/profile/addcard">Adicionar um cartão</Link>
      )}
    </Box>
  );
};