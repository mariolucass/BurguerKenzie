import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const HeaderDrawer = () => {
  const navigate = useNavigate();
  const [openBurguerMenu, setOpenBurguerMenu] = useState(false);
  const toggleBurguerMenu = () => setOpenBurguerMenu(!openBurguerMenu);

  const list = [
    { name: "Dashboard", url: "/dashboard" },
    { name: "Editar endereco", url: "/profile/address" },
    { name: "Editar perfil", url: "/profile" },
    { name: "Adicionar Cartão", url: "/profile/addcard" },
  ];

  const listRender = list.map((elem) => (
    <ListItem key={elem.name}>
      <ListItemButton onClick={() => navigate(`${elem.url}`)}>
        <ListItemText primary={elem.name} />
      </ListItemButton>
    </ListItem>
  ));

  return (
    <>
      <IconButton onClick={toggleBurguerMenu}>
        <HiMenu />
      </IconButton>

      <Drawer anchor="left" open={openBurguerMenu}>
        <IconButton sx={{ mb: 2 }} onClick={toggleBurguerMenu}>
          <HiX />
        </IconButton>

        <List>{listRender}</List>
      </Drawer>
    </>
  );
};
