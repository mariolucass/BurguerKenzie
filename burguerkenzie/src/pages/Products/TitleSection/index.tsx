import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import {
  default as Burguers,
  default as Drinks,
} from "../../../assets/drinks.svg";
import Favourites from "../../../assets/favourites.svg";

export const TitleSection = () => {
  const { categoryName } = useParams();

  return (
    <Box sx={{}}>
      <Typography variant="h2">
        {categoryName === "burguers"
          ? "Sanduíches"
          : categoryName === "drinks"
          ? "Bebidas"
          : "Favoritos"}
      </Typography>

      <Box
        component={"img"}
        src={
          categoryName === "burguers"
            ? Burguers
            : categoryName === "drinks"
            ? Drinks
            : Favourites
        }
      />
    </Box>
  );
};
