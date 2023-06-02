import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";

interface IProps {
  name: string;
  category: string;
}

export const ProductDescription = ({ name, category }: IProps) => {
  return (
    <Box
      sx={BoxSx}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        spacing={4}
      >
        <Typography variant="h4">{name ? name : "Loading..."}</Typography>

        <Divider orientation="vertical" flexItem />

        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={4}
        >
          <Chip
            label={category ? category : "Loading..."}
            sx={{
              borderRadius: 1,
              width: "100%",
              color: "white",
              backgroundColor: "#27ae60",
              fontFamily: "Inter",
            }}
          />
        </Stack>
      </Stack>
    </Box>
  );
};
