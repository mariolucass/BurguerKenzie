import { Box, Button, Divider, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useCartContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate,
} from "../../../utils/utils";
import { FormAddCard } from "./styles";

export const FormPayment = () => {
  const { card, setCard } = useCartContext();

  const handleInputFocus = (e: any) => {
    setCard((card) => {
      return { ...card, focus: e.target.name };
    });
  };

  const handleInputChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;
    console.log(name);

    if (name === "number") {
      value = formatCreditCardNumber(value);
    } else if (name === "cvc") {
      value = formatCVC(value, card.number);
    } else if (name === "expiry") {
      value = formatExpirationDate(value);
    }

    setCard((card) => {
      return { ...card, [name]: value };
    });
  };

  return (
    <Box
      sx={{
        borderRadius: 1,
        padding: 6,
        backgroundColor: "white",
        display: "flex",
        gap: "1em",
        justifyContent: "center",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <FormAddCard>
        <TextField
          name="number"
          label="Número do cartão"
          placeholder="Número do cartão"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 16 }}
        />
        <TextField
          name="name"
          label="Nome"
          placeholder="Nome"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 16 }}
        />
        <TextField
          name="expiry"
          label="Validade"
          placeholder="Validade"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 4 }}
        />
        <TextField
          name="cvc"
          label="CVC"
          placeholder="CVC"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          inputProps={{ maxLength: 3 }}
        />

        <Divider flexItem />

        <Button variant="outlined">Adicionar cartão</Button>
      </FormAddCard>
    </Box>
  );
};