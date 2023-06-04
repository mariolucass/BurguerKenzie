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
        gap: 10,
        borderRadius: 2,
        display: "flex",
        maxWidth: hasMinWidth900 ? 1000 : "80%",
        backgroundSize: "cover",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      }}
    >
      <Box>
        <Box component="img" src={WelcomeIllustration} />
      </Box>

      <Box
        sx={{
          p: 3,
          gap: 3,
          padding: 1,
          display: "flex",
          flexDirection: "column",
          textAlign: "right",
        }}
      >
        <Typography variant="h3" color="#ffffff">
          Piscou, chegou!
        </Typography>

        <Typography color="#ffffff">
          Nossos pedidos são feitos com rapidez, versatilidade e preparo, sempre
          com o objetivo de matar sua fome.
        </Typography>
      </Box>
    </Box>
  );
};
