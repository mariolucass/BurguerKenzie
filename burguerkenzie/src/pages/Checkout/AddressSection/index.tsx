import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useUserContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";

export const AddressContent = () => {
  const { user, address } = useUserContext();
  console.log(address);

  return (
    <Box
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
      sx={{
        p: 6,
        borderRadius: 1,
        backgroundColor: "white",
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        minHeight: 200,
      }}
    >
      <Typography variant="h6">1. Endereço de entrega</Typography>

      <div>
        <Typography>{user.username}</Typography>
        <Typography>{address.street}</Typography>
        <Typography>
          {address.city}, {address.state} {address.cep}
        </Typography>
      </div>
    </Box>
  );
};
