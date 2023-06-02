import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useMediaContext, useProductsContext } from "../../contexts";
import { BoxSx } from "../../libs/mui";
import { animateHiddenCard, animateShownCard } from "./animations";
import { ItemMenu, ListMenu } from "./styles";

export const MenuCategory = () => {
  const navigate = useNavigate();
  const { products, setFilteredProducts } = useProductsContext();
  const { matches768 } = useMediaContext();

  const list = [
    {
      title: "Mais pedidos",
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

  const colorsList = ["#e6626f", "#efae78", "#f5e19c", "#66af91"];

  const handleClickMenu = (link: string) => {
    navigate(`/products/${link}`);

    if (link === "burguers") {
      const productsFilter = products.filter((elem) => {
        return elem.category === "Sanduíches";
      });
      setFilteredProducts(productsFilter);
    } else if (link === "drinks") {
      const productsFilter = products.filter((elem) => {
        return elem.category !== "Sanduíches";
      });
      setFilteredProducts(productsFilter);
    } else {
      setFilteredProducts([]);
    }
  };

  const listRender = list.map((elem, index) => (
    <ItemMenu
      key={elem.title}
      onClick={() => handleClickMenu(elem.link)}
      backgroundColor={colorsList[index]}
      whileHover={{ scale: 0.95 }}
      whileTap={{ scale: 0.75 }}
      initial={{ ...animateHiddenCard, y: -100 }}
      animate={{ ...animateShownCard, y: 0 }}
    >
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

      <Typography sx={{ fontWeight: "bold" }}>{elem.title}</Typography>
    </ItemMenu>
  ));

  return <ListMenu>{listRender}</ListMenu>;
};
