import { motion } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { FontSx } from "../../EspecificProduct/styles";
import DinnerIllustration from "../../../assets/restaurantDinner.svg";
import WaveWelcomeReverseBackground from "../../../assets/wavesReverse.svg";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

const styleDiv = {
  backgroundImage: `url(${WaveWelcomeReverseBackground})`,
};

export const MostOrdereds = () => {
  return (
    <Box
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
      boxShadow={10}
      style={styleDiv}
      sx={{
        p: 2,
        display: "flex",
        borderRadius: 4,
        maxWidth: 950,
        gap: 10,
      }}
    >
      <Box
        sx={{
          p: 3,
          gap: 3,
          padding: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" sx={{ ...FontSx, color: "#ffffff" }}>
          Suporte ao cliente.
        </Typography>

        <Typography sx={{ ...FontSx, color: "#ffffff" }}>
          Nosso sistema conta com suporte ao cliente para suprir suas
          necessidades, contando com feedbacks, reclamações e sugestões.
        </Typography>
      </Box>

      <img src={DinnerIllustration} />
    </Box>
  );
};
