import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import WavesWelcomeSection from "../../../assets/wavesWelcome.svg";
import WavesWelcomeSectionMobile from "../../../assets/wavesWelcomeMobile.svg";
import WelcomeIllustration from "../../../assets/welcomeIllustration.svg";
import { useMediaContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";

export const WelcomeSection = () => {
  const { hasMinWidth900 } = useMediaContext();

  const styleDiv = {
    backgroundImage: hasMinWidth900
      ? `url(${WavesWelcomeSection})`
      : `url(${WavesWelcomeSectionMobile})`,
  };

  const mobileSxIllustration = { width: "100%", height: "40%" };
  const desktopSxIllustration = { width: "45%", height: "100%" };

  const mobileSxText = { width: "100%", height: "50%", textAlign: "center" };
  const desktopSxText = { width: "50%", height: "100%", textAlign: "right" };

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
        flexDirection: hasMinWidth900 ? "row" : "column",
        maxWidth: hasMinWidth900 ? 1000 : "95%",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundSize: "cover",
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
      }}
    >
      <Box sx={hasMinWidth900 ? desktopSxIllustration : mobileSxIllustration}>
        <Box
          component="img"
          src={WelcomeIllustration}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>

      <Box
        sx={{
          p: 3,
          gap: 3,
          padding: 1,
          display: "flex",
          flexDirection: "column",
          ...(hasMinWidth900
            ? {
                ...desktopSxText,
              }
            : { ...mobileSxText }),
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
