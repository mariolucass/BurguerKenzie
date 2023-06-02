import { Box, Button, Divider, TextField } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useUserContext } from "../../../contexts";
import {
  animateHiddenBox,
  animateShownBox,
  animateTransitionBox,
} from "../animations";
import { FormChangeProfile } from "./styles";

export const ProfileForm = () => {
  const { user, setUser } = useUserContext();
  useEffect(() => {
    const token = localStorage.getItem("burguerKenzie:user");
    if (token) {
      const { username, email, phone, image } = JSON.parse(token);
      setUser({
        username: username,
        email: email,
        phone: phone,
        image: image,
      });
    }
  }, []);

  const handleInputChange = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let { name, value } = e.target;

    setUser((user) => {
      return { ...user, [name]: value };
    });
  };

  return (
    <Box
      sx={{
        borderRadius: 1,
        padding: 6,
        backgroundColor: "white",
        display: "flex",
        gap: "1em",
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
          placeholder="Nome de usuário"
          value={user.username || ""}
          onChange={handleInputChange}
        />

        <TextField
          name="image"
          label="Imagem de perfil"
          placeholder="Foto do perfil"
          onBlur={handleInputChange}
        />

        <TextField
          name="email"
          label="Email"
          placeholder="Email"
          value={user.email || ""}
          onChange={handleInputChange}
        />

        <TextField
          name="phone"
          label="Celular"
          placeholder="Celular"
          value={user.phone || ""}
          onChange={handleInputChange}
        />

        <Divider flexItem />

        <Button variant="outlined" type="submit">
          Editar Perfil
        </Button>
      </FormChangeProfile>
    </Box>
  );
};
