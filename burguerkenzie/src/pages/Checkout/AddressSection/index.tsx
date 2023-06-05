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
  const { user } = useUserContext();

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
        {user.address.city ? <Link to="/profile/address">Alterar</Link> : <></>}
      </Box>

      {user.address.city ? (
        <div>
          <Typography>{user.username}</Typography>
          <Typography>{user.address.street}</Typography>
          <Typography>
            {user.address.city}, {user.address.state} {user.address.cep}
          </Typography>
        </div>
      ) : (
        <Link to="/profile/address">Adicionar um endereço</Link>
      )}
    </Box>
  );
};
