import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useUserContext } from "../../../contexts";
import { BoxSx } from "../../../libs/mui";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

import MapSvg from "../../../assets/navigation.png";

export const AddressRender = () => {
  const { user } = useUserContext();

  return (
    <Box
      sx={{
        ...BoxSx,
        minHeight: 565,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Typography variant="h4" sx={{ fontWeight: "600" }}>
        Insira os dados do seu cartão:
      </Typography>

      <Divider flexItem />

      <img src={MapSvg} alt="" />
    </Box>
  );
};
