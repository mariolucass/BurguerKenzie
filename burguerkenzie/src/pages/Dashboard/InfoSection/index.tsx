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
  const { hasMinWidth900 } = useMediaContext();

  return (
    <Box
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
      style={styleDiv}
      sx={{
        p: 2,
        borderRadius: 2,
        display: "flex",
        maxWidth: hasMinWidth900 ? 1000 : "80%",
        backgroundSize: "cover",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
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

      <Box>
        <Box component="img" src={DinnerIllustration} />
      </Box>
    </Box>
  );
};
