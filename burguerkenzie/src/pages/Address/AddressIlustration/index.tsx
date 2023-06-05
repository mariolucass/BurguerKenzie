import { Box } from "@mui/material";
import { motion } from "framer-motion";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";

import AddressIllustrations from "../../../assets/addressIllustration.svg";
import { useMediaContext } from "../../../contexts";

export const AddressIllustration = () => {
  const { hasMinWidth900 } = useMediaContext();

  return (
    <Box
      sx={{
        ...BoxSx,
        mt: 2,
        mb: 2,
        minHeight: 366.5,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={AddressIllustrations}
          sx={{
            width: hasMinWidth900 ? "50%" : "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </Box>
    </Box>
  );
};
