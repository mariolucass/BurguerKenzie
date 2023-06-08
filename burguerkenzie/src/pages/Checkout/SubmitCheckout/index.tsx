import { Box, Button, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useCartContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";
import { monetizeString } from "../../../utils/utils";
import { ValuesDiv } from "./styles";

export const SubmitContent = () => {
  const { currentSaleValue } = useCartContext();
  const whatsappURL = `https://api.whatsapp.com/send/?phone=5588997990589&text=Adorei seu projeto !! podemos conversar melhor sobre ?`;
  return (
    <>
      <Box
        component={motion.div}
        initial={animateHiddenBox}
        animate={animateShownBox}
        transition={animateTransitionBox}
        sx={{
          ...BoxSx,
          display: "flex",
          flexDirection: "column",
          borderRadius: "8px 8px 0px 0px",
          minHeight: 300,
          gap: "2em",
        }}
      >
        <Button
          variant="contained"
          component={motion.a}
          target="_blank"
          href={whatsappURL}
        >
          Finalizar Pedido
        </Button>

        <Divider flexItem />

        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Typography variant="h5">Resumo:</Typography>

          <ValuesDiv>
            <Typography>Itens:</Typography>
            <Typography>{monetizeString(currentSaleValue)}</Typography>
          </ValuesDiv>

          <ValuesDiv>
            <Typography>Descontos:</Typography>
            <Typography>{monetizeString(currentSaleValue / 10)}</Typography>
          </ValuesDiv>

          <ValuesDiv>
            <Typography>Total do pedido:</Typography>
            <Typography>
              {monetizeString(currentSaleValue - currentSaleValue / 10)}
            </Typography>
          </ValuesDiv>
        </Box>
      </Box>

      <Box
        component={motion.div}
        initial={{ ...animateHiddenBox, y: -100 }}
        animate={{ ...animateShownBox, y: 0 }}
        transition={animateTransitionBox}
        sx={{
          ...BoxSx,
          borderRadius: "0px 0px 8px 8px",
          backgroundColor: "#93d7af",
          display: "flex",
          textAlign: "center",
          minHeight: 100,
        }}
      >
        <Typography variant="subtitle1" color="#828282">
          Parabéns, você recebeu 10% de desconto na primeira compra!
        </Typography>
      </Box>
    </>
  );
};
