import { Alert, AlertTitle, Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";

export const WarningMessage = () => {
  return (
    <Box
      sx={{
        borderRadius: 1,
        padding: 6,
        backgroundColor: "white",
        minHeight: 0,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Alert severity="warning">
        <AlertTitle>Alerta!</AlertTitle>
        Essa página apenas simula uma página real para adicionar cartões de
        crédito! — <strong>Use apenas números ficticios!</strong>
      </Alert>
    </Box>
  );
};
