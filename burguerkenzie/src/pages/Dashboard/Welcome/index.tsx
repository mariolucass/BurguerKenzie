import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import WaveWelcomeBackground from "../../../assets/waves.svg";
import WelcomeIllustration from "../../../assets/welcome.svg";
import { useMediaContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";

const styleDiv = {
  backgroundImage: `url(${WaveWelcomeBackground})`,
};

export const WelcomeSection = () => {
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
      <img src={WelcomeIllustration} />

      <Box
        sx={{
          p: 3,
          gap: 3,
          padding: 1,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Typography variant="h3" sx={{ color: "#ffffff", textAlign: "right" }}>
          Piscou, chegou!
        </Typography>

        <Typography sx={{ color: "#ffffff", textAlign: "right" }}>
          Nossos pedidos são feitos com rapidez, versatilidade e preparo, sempre
          com o objetivo de matar sua fome.
        </Typography>
      </Box>
    </Box>
  );
};
