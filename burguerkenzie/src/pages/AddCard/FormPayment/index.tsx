import { motion } from "framer-motion";
import { BoxSx } from "../../../libs/mui";
import { Box, TextField } from "@mui/material";
import { useCartContext } from "../../../contexts";
import { handleCardExpiry, handleCardNumber } from "../../../utils/utils";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

export interface Card {}

export const FormPayment = () => {
  const { setCard } = useCartContext();

  const handleInputFocus = (e: any) => {
    setCard((card) => {
      return { ...card, focus: e.target.name };
    });
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setCard((card) => {
      return { ...card, [name]: value };
    });
  };

  return (
    <Box
      sx={{ ...BoxSx }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <form action="">
        <TextField
          name="number"
          placeholder="Número do cartão"
          onKeyUp={handleCardNumber}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 16 }}
        />

        <TextField
          name="name"
          placeholder="Nome"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 16 }}
        />

        <TextField
          name="expiry"
          onKeyUp={handleCardExpiry}
          placeholder="Validade"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 4 }}
        />

        <TextField
          name="cvc"
          placeholder="CVC"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 3 }}
        />
      </form>
    </Box>
  );
};
