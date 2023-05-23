import { Box, Typography } from "@mui/material";
import { ListMenu } from "./styles";
import { BoxSx, FontSx } from "../../pages/EspecificProduct/styles";

export const MenuCategory = () => {
  const list = [
    {
      title: "Mais pedidos",
      img: "https://i.imgur.com/Vng6VzV.png",
      color: "",
    },
    { title: "Lanches", img: "https://i.imgur.com/eEzZzcF.png", color: "" },
    {
      title: "Refeições",
      img: "https://i.imgur.com/soOUeeW.png",
      color: "",
    },
    { title: "Bebidas", img: "https://i.imgur.com/iNkD4Pq.png", color: "" },
  ];

  const handleClickMenu = () => {};

  const listRender = list.map((elem) => (
    <li onClick={handleClickMenu}>
      <Box
        sx={{
          ...BoxSx,
          height: 64,
          width: 64,
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          component="img"
          src={elem.img}
          alt="productImage"
          className="image"
          sx={{
            objectFit: "contain",
            width: "96px",
            height: "96px",
            marginTop: 3,
          }}
        />
      </Box>

      <Typography sx={FontSx}>{elem.title}</Typography>
    </li>
  ));

  return <ListMenu>{listRender}</ListMenu>;
};
