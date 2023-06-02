import { Avatar, Box, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { FaUserCircle } from "react-icons/fa";
import { useUserContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";
import { AvatarDiv, ContentDiv, DataDiv } from "./styles";

export const ProfileRender = () => {
  const { user } = useUserContext();

  return (
    <Box
      sx={{
        ...BoxSx,
        minHeight: 437.5,
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
          <AvatarDiv>
            <FaUserCircle size={"168px"} />
          </AvatarDiv>
        ) : (
          <Avatar src={user.image} sx={{ width: 176, height: 176 }} />
        )}

        <DataDiv>
          <Typography variant="subtitle1" color={"white"}>
            Nome:
          </Typography>
          <Typography variant="h6" color={"white"}>
            {user.username ? user.username : "seu_nome_de_usuário"}
          </Typography>

          <Typography variant="subtitle1" color={"white"}>
            Email:
          </Typography>
          <Typography variant="h6" color={"white"}>
            {user.email ? user.email : "email@example.com"}
          </Typography>

          <Typography variant="subtitle1" color={"white"}>
            Telefone:
          </Typography>
          <Typography variant="h6" color={"white"}>
            {user.phone ? user.phone : "99999-9999"}
          </Typography>
        </DataDiv>
      </ContentDiv>
    </Box>
  );
};
