import { Avatar, Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { useUserContext } from "../../../contexts";
import { BoxSx } from "../../../libs/mui";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";
import { ContentDiv, DataDiv, SvgDiv } from "./styles";

export const ProfileRender = () => {
  const { user } = useUserContext();

  return (
    <Box
      sx={{
        ...BoxSx,
        minHeight: 420,
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
        Edite os dados do seu perfil:
      </Typography>

      <Divider flexItem />

      <ContentDiv>
        {!user.image ? (
          <SvgDiv>
            <FaUserCircle size={"256px"} />
          </SvgDiv>
        ) : (
          <Avatar src={user.image} sx={{ width: 256, height: 256 }}></Avatar>
        )}

        <DataDiv>
          <Typography variant="h6">
            {user.username ? user.username : "seu_nome_de_usuário"}
          </Typography>

          <Typography variant="h6">
            {user.email ? user.email : "email@example.com"}
          </Typography>

          <Typography variant="h6">
            {user.phone ? user.phone : "99999-9999"}
          </Typography>
        </DataDiv>
      </ContentDiv>
    </Box>
  );
};
