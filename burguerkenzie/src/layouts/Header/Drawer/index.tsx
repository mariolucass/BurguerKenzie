import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { AiFillCreditCard, AiOutlineShoppingCart } from "react-icons/ai";
import { BsCartDashFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { FaAddressCard } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export const HeaderDrawer = () => {
  const navigate = useNavigate();
  const [openBurguerMenu, setOpenBurguerMenu] = useState(false);
  const toggleBurguerMenu = () => setOpenBurguerMenu(!openBurguerMenu);

  const list = [
    { name: "Dashboard", url: "/dashboard", icon: <BsCartDashFill /> },
    {
      name: "Editar Endereço",
      url: "/profile/address",
      icon: <FaAddressCard />,
    },
    { name: "Editar Perfil", url: "/profile", icon: <CgProfile /> },
    {
      name: "Adicionar Cartão",
      url: "/profile/addcard",
      icon: <AiFillCreditCard />,
    },
    {
      name: "Carrinho",
      url: "/cart",
      icon: <AiOutlineShoppingCart />,
    },
  ];

  const listRender = list.map((elem) => (
    <ListItem key={elem.name}>
      <ListItemButton
        onClick={() => {
          toggleBurguerMenu();
          navigate(`${elem.url}`);
        }}
      >
        {elem.icon}
        <Typography variant="h6">{elem.name}</Typography>
      </ListItemButton>
    </ListItem>
  ));

  return (
    <>
      <IconButton onClick={toggleBurguerMenu}>
        <HiMenu />
      </IconButton>

      <Drawer
        anchor="left"
        open={openBurguerMenu}
        onClose={() => setOpenBurguerMenu(false)}
      >
        <Box
          sx={{
            p: 1,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            backgroundColor: "#27ae60",
          }}
        >
          <IconButton sx={{ mb: 2 }} onClick={toggleBurguerMenu}>
            <HiX />
          </IconButton>
        </Box>

        <Divider />

        <List>{listRender}</List>
      </Drawer>
    </>
  );
};
