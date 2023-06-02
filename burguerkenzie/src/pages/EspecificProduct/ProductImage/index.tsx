import { Box, Skeleton } from "@mui/material";
import { motion } from "framer-motion";
import { BoxSx, ImageSx } from "../../../libs/mui";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

interface IProps {
  src: string;
}

export const ProductImage = ({ src }: IProps) => {
  return (
    <Box
      sx={BoxSx}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      {src ? (
        <Box component="img" src={src} alt="productImage" sx={ImageSx} />
      ) : (
        <Skeleton sx={ImageSx} />
      )}
    </Box>
  );
};
