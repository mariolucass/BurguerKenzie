import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMediaContext } from "../../contexts";
import { ItemMenu, ListMenu } from "./styles";

const transitionItem = { duration: 1.2, ease: [0.6, 0.01, -0.05, 0.9] };
const transitionList = {
  staggerChildren: 0.15,
  staggerDirection: 1,
};

const listMenuVariant = {
  initial: { y: -100 },
  animate: {
    y: 0,
    transition: transitionList,
  },
};
const itemMenuVariant = {
  initial: { y: -500 },
  animate: {
    y: 0,
    transition: transitionItem,
  },
};

const colorsList = ["#e6626f", "#efae78", "#f5e19c", "#66af91"];
const list = [
  {
    title: "Favoritos",
    img: "https://i.imgur.com/Vng6VzV.png",
    link: "favourites",
  },
  {
    title: "Sanduíches",
    img: "https://i.imgur.com/eEzZzcF.png",
    link: "burguers",
  },
  {
    title: "Bebidas",
    img: "https://i.imgur.com/iNkD4Pq.png",
    link: "drinks",
  },
];

export const MenuCategory = () => {
  const navigate = useNavigate();
  const { hasMinWidth900 } = useMediaContext();

  const handleClickMenu = (link: string) => navigate(`/products/${link}`);

  const listRender = list.map((elem, index) => (
    <ItemMenu
      key={elem.title}
      onClick={() => handleClickMenu(elem.link)}
      backgroundColor={colorsList[index]}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.75 }}
      variants={itemMenuVariant}
    >
      <Box
        sx={{
          padding: hasMinWidth900 ? 6 : 4,
          height: hasMinWidth900 ? 64 : 32,
          width: hasMinWidth900 ? 64 : 32,
          borderRadius: 1,
          maxHeight: 400,
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
            mt: 3,
            objectFit: "contain",
            width: hasMinWidth900 ? "96px" : "64px",
            height: hasMinWidth900 ? "96px" : "64px",
          }}
        />
      </Box>

      <Typography sx={{ fontWeight: "bold" }}>{elem.title}</Typography>
    </ItemMenu>
  ));

  return (
    <ListMenu
      initial="initial"
      animate="animate"
      exit={{ opacity: 0, transition: { duration: 0.4 } }}
      variants={listMenuVariant}
    >
      {listRender}
    </ListMenu>
  );
};
