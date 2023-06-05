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
  const size = "2em";

  const list = [
    {
      name: "Dashboard",
      url: "/dashboard",
      icon: <BsCartDashFill size={size} />,
    },
    {
      name: "Editar Endereço",
      url: "/profile/address",
      icon: <FaAddressCard size={size} />,
    },
    { name: "Editar Perfil", url: "/profile", icon: <CgProfile size={size} /> },
    {
      name: "Adicionar Cartão",
      url: "/profile/addcard",
      icon: <AiFillCreditCard size={size} />,
    },
    {
      name: "Carrinho",
      url: "/cart",
      icon: <AiOutlineShoppingCart size={size} />,
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
        <Typography variant="h6" sx={{ ml: 4 }}>
          {elem.name}
        </Typography>
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
            height: 50,
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "flex-start",
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
