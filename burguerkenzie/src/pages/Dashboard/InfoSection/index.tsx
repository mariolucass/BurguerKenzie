import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import InfoIllustration from "../../../assets/infoIllustration.svg";
import WavesInfoSection from "../../../assets/wavesInfo.svg";
import WavesInfoMobileSection from "../../../assets/wavesInfoMobile.svg";
import { useMediaContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";

export const SectionInfo = () => {
  const { hasMinWidth900 } = useMediaContext();

  const styleDiv = {
    backgroundImage: hasMinWidth900
      ? `url(${WavesInfoSection})`
      : `url(${WavesInfoMobileSection})`,
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
        borderRadius: 2,
        display: "flex",
        flexDirection: hasMinWidth900 ? "row" : "column",
        maxWidth: hasMinWidth900 ? 1000 : "95%",
        backgroundSize: "cover",
        justifyContent: "space-between",
        alignItems: "center",
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
          ...(hasMinWidth900
            ? {
                ...desktopSxText,
              }
            : { ...mobileSxText }),
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

      <Box sx={hasMinWidth900 ? desktopSxIllustration : mobileSxIllustration}>
        <Box
          component="img"
          src={InfoIllustration}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};
