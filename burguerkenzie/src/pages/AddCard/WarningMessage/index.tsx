import { Alert, AlertTitle, Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";

export const WarningMessage = () => {
  return (
    <Box
      sx={{
        ...BoxSx,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "2em",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Alert severity="warning">
        <AlertTitle>Alerta!</AlertTitle>
        Essa página apenas simula uma página real para adicionar cartões de
        crédito! — <strong>Use apenas dados ficticios!</strong>
      </Alert>
    </Box>
  );
};
