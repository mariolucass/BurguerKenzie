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
import { StyledDrawer } from "./styles";

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
      name: "Carrinho",
      url: "/cart",
      icon: <AiOutlineShoppingCart size={size} />,
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
        <Typography variant="h6" sx={{ ml: 2 }}>
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
            width: "75vw",
            display: "flex",
            justifyContent: "flex-start",
            alignContent: "flex-start",
            backgroundColor: "#27ae60",
          }}
        >
          <IconButton
            sx={{ mb: 2, height: "100%" }}
            onClick={toggleBurguerMenu}
          >
            <HiX size={"1.5em"} />
          </IconButton>
        </Box>

        <Divider />

        <StyledDrawer>
          <List>{listRender}</List>
        </StyledDrawer>
      </Drawer>
    </>
  );
};
