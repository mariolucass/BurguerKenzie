import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";

export const AddressRender = () => {
  return (
    <Box
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
      sx={{
        ...BoxSx,
        minHeight: 198,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "600" }}>
        Edite os dados do seu endereço:
      </Typography>

      <Divider flexItem />
    </Box>
  );
};
