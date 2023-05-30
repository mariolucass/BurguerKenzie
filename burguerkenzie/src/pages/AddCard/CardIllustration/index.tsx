import Cards from "react-credit-cards";
import { motion } from "framer-motion";
import { BoxSx } from "../../../libs/mui";
import { useCartContext } from "../../../contexts";
import { Box, Divider, Typography } from "@mui/material";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

export const CardIllustration = () => {
  const { card } = useCartContext();
  return (
    <Box
      sx={{ ...BoxSx }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Typography>
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          Insira os dados do seu cartão:
        </Typography>

        <Divider />

        <Cards
          placeholders={{ name: "SEU NOME AQUI" }}
          locale={{ valid: "valido até" }}
          cvc={card.cvc}
          expiry={card.expiry}
          focused={card.focus}
          name={card.name}
          number={card.number}
        />
      </Typography>
    </Box>
  );
};
