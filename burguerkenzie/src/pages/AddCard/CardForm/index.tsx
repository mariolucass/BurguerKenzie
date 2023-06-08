import { Box, Button, Divider, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useCartContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";
import {
  formatCVC,
  formatCreditCardNumber,
  formatExpirationDate,
} from "../../../utils/utils";
import { FormAddCard } from "./styles";

export const FormPayment = () => {
  const { card, setCard } = useCartContext();

  const handleInputChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

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
  const handleInputFocus = (e: any) => {
    setCard((card) => {
      return { ...card, focus: e.target.name };
    });
  };

  return (
    <Box
      sx={{
        ...BoxSx,
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
          placeholder="9999 9999 9999 9999"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          value={card.number || ""}
        />
        <TextField
          name="name"
          label="Nome"
          placeholder="Marco Cunha"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          value={card.name || ""}
          inputProps={{ maxLength: 16 }}
        />
        <TextField
          name="expiry"
          label="Validade"
          placeholder="MM / YY"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          value={card.expiry || ""}
        />
        <TextField
          name="cvc"
          label="CVC"
          placeholder="999"
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          value={card.cvc || ""}
        />

        <Divider flexItem />

        <Button variant="outlined">Adicionar cartão</Button>
      </FormAddCard>
    </Box>
  );
};
