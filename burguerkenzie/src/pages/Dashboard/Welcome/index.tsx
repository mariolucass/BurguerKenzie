import { Box, Button, Typography } from "@mui/material";
import WelcomeIllustration from "../../../assets/welcome.svg";
import WaveWelcomeBackground from "../../../assets/waves.svg";
import { FontSx } from "../../EspecificProduct/styles";
import { motion } from "framer-motion";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

const styleDiv = {
  backgroundImage: `url(${WaveWelcomeBackground})`,
};

export const WelcomeSection = () => {
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
        <Typography
          variant="h3"
          sx={{ ...FontSx, color: "#ffffff", textAlign: "right" }}
        >
          Piscou, chegou!
        </Typography>

        <Typography sx={{ ...FontSx, color: "#ffffff", textAlign: "right" }}>
          Nossos pedidos são feitos com rapidez, versatilidade e preparo, sempre
          com o objetivo de matar sua fome.
        </Typography>
      </Box>
    </Box>
  );
};
