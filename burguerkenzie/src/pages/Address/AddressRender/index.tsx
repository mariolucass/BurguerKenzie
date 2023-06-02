import { Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useUserContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";

export const AddressRender = () => {
  const { user } = useUserContext();

  return (
    <>
      <Box
        sx={{
          ...BoxSx,
          minHeight: 198,
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
          Edite os dados do seu endereço:
        </Typography>

        <Divider flexItem />

        {/* <img src={MapSvg} alt="" /> */}
      </Box>

      <Box
        sx={{
          ...BoxSx,
          mt: 2,
          minHeight: 366.5,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
        }}
        component={motion.div}
        initial={animateHiddenBox}
        animate={animateShownBox}
        transition={animateTransitionBox}
      ></Box>
    </>
  );
};
