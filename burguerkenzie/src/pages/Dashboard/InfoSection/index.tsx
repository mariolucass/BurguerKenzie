import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import DinnerIllustration from "../../../assets/restaurantDinner.svg";
import WaveWelcomeReverseBackground from "../../../assets/wavesReverse.svg";
import { useMediaContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";

const styleDiv = {
  backgroundImage: `url(${WaveWelcomeReverseBackground})`,
};

export const SectionInfo = () => {
  const { matches768 } = useMediaContext();
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
        maxWidth: matches768 ? 950 : 300,
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
        <Typography variant="h3" sx={{ color: "#ffffff" }}>
          Suporte ao cliente.
        </Typography>

        <Typography sx={{ color: "#ffffff" }}>
          Nosso sistema conta com suporte ao cliente para suprir suas
          necessidades, contando com feedbacks, reclamações e sugestões.
        </Typography>
      </Box>

      <img src={DinnerIllustration} />
    </Box>
  );
};
