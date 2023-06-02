import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { BoxSx } from "../../../libs/mui";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

export const WarningMessage = () => {
  return (
    <Box
      sx={{
        ...BoxSx,
        minHeight: 420,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Typography>Importante!</Typography>
      <Typography>
        Essa página apenas simula uma página real para adicionar cartões de
        crédito!
      </Typography>

      <Typography>Use apenas números ficticios</Typography>
    </Box>
  );
};
