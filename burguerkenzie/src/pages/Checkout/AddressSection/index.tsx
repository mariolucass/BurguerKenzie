import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useUserContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";

export const AddressContent = () => {
  const { user, address } = useUserContext();

  return (
    <Box
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
      sx={{
        ...BoxSx,
        display: "flex",
        flexDirection: "column",
        gap: "2em",
        minHeight: 200,
      }}
    >
      <Box
        sx={{ width: "100%", display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="h6">1. Endereço de entrega</Typography>
        {address.city ? <Link to="/profile/address">Alterar</Link> : <></>}
      </Box>

      {address.city ? (
        <div>
          <Typography>{user.username}</Typography>
          <Typography>{address.street}</Typography>
          <Typography>
            {address.city}, {address.state} {address.cep}
          </Typography>
        </div>
      ) : (
        <Link to="/profile/address">Adicionar um endereço</Link>
      )}
    </Box>
  );
};
