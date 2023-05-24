import { motion } from "framer-motion";
import { BoxSx, FontSx } from "../styles";
import { Box, Chip, Divider, Stack, Typography } from "@mui/material";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

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
        <Typography sx={FontSx} variant="h4">
          {name ? name : "Loading..."}
        </Typography>

        <Divider orientation="vertical" flexItem />

        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={4}
        >
          <Chip
            label={"Categoria"}
            sx={{
              borderRadius: 2,
              width: "100%",
              color: "white",
              backgroundColor: "#27ae60",
              fontFamily: "Inter",
            }}
          />
          <Typography sx={FontSx}>
            {category ? category : "Loading..."}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};
