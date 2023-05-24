import { Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import Favourites from "../../../assets/favourites.svg";
import Burguers from "../../../assets/drinks.svg";
import Drinks from "../../../assets/drinks.svg";

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
