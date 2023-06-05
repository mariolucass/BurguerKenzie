import { Box, Chip, Divider, Skeleton, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useProductsContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx, ImageSx } from "../../../libs/mui";

export const ProductContent = () => {
  const { productEspecific } = useProductsContext();

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
        sx={{ maxWidth: "100%" }}
      >
        <Typography variant="h4">
          {productEspecific.name ? productEspecific.name : "Loading..."}
        </Typography>

        <Divider orientation="vertical" flexItem />

        <Stack
          direction="column"
          justifyContent="space-around"
          alignItems="center"
          spacing={4}
        >
          <Chip
            label={
              productEspecific.category
                ? productEspecific.category
                : "Loading..."
            }
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

      {productEspecific.img ? (
        <Box
          component="img"
          src={productEspecific.img}
          alt="productImage"
          sx={ImageSx}
        />
      ) : (
        <Skeleton sx={ImageSx} />
      )}
    </Box>
  );
};
