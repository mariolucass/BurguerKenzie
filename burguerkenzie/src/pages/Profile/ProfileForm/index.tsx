import { Box, Button, Divider, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useUserContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../../../libs/framer";
import { BoxSx } from "../../../libs/mui";
import { formatPhone } from "../../../utils/utils";
import { FormChangeProfile } from "./styles";

export const ProfileForm = () => {
  const { user, setUser } = useUserContext();

  useEffect(() => getProfileIfHasToken(), []);

  const getProfileIfHasToken = () => {
    const token = localStorage.getItem("burguerKenzie:user");
    if (token) {
      const data = JSON.parse(token);
      setUser(data);
    }
  };

  const handleInputChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    if (name === "phone") {
      value = formatPhone(value);
    }

    if (name === "image") {
      if (value.length > 0) {
        setUser((user) => {
          return { ...user, [name]: value };
        });
      }
      return;
    }

    setUser((user) => {
      return { ...user, [name]: value };
    });
  };

  return (
    <Box
      sx={{
        ...BoxSx,
        gap: "1em",
        display: "flex",
        justifyContent: "center",
      }}
      component={motion.div}
      initial={animateHiddenBox}
      animate={animateShownBox}
      transition={animateTransitionBox}
    >
      <FormChangeProfile
        onSubmit={(event: any) => {
          event.preventDefault();
          localStorage.setItem("burguerKenzie:user", JSON.stringify(user));
        }}
      >
        <TextField
          name="username"
          label="Usuário"
          placeholder="seunomedeusuário"
          value={user.username || ""}
          onChange={handleInputChange}
        />

        <TextField
          type="url"
          name="image"
          label="Foto do perfil"
          placeholder="www.example.com"
          onBlur={handleInputChange}
        />

        <TextField
          name="email"
          label="Email"
          placeholder="email@mail.com"
          value={user.email || ""}
          onChange={handleInputChange}
        />

        <TextField
          name="phone"
          label="Celular"
          placeholder="(99) 99999-9999"
          value={user.phone || ""}
          onChange={handleInputChange}
          inputProps={{ maxLength: 15 }}
        />

        <Divider flexItem />

        <Button variant="outlined" type="submit">
          Editar Perfil
        </Button>
      </FormChangeProfile>
    </Box>
  );
};
