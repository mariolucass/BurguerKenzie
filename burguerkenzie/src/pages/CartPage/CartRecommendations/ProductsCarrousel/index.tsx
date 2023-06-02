import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Stack,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useProductsContext } from "../../../../contexts";
import { ProductInterface } from "../../../../interfaces";
import { animateHiddenCard, animateShownCard } from "../../../../libs/framer";
import { monetizeString } from "../../../../utils/utils";
import { ListCarrousel } from "./styles";

export const ProductsRecommendations = () => {
  const { products } = useProductsContext();
  const navigate = useNavigate();

  const listToRender = (list: ProductInterface[]) => {
    return list.map((elem) => {
      const handleRedirectToProductPage = () => {
        navigate(`/products/burguers/${elem.id}`);
      };

      return (
        <Card
          key={elem.name}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            cursor: "pointer",
          }}
          component={motion.div}
          initial={{ ...animateHiddenCard, y: 100 }}
          animate={{ ...animateShownCard, y: 0 }}
          onClick={handleRedirectToProductPage}
          whileHover={{ scale: 0.95 }}
          whileTap={{ scale: 0.75 }}
        >
          <Box sx={{ width: 177 }}>
            <CardMedia component="img" image={elem.img} />
          </Box>

          <CardContent sx={{ width: "45%" }}>
            <Stack
              direction="column"
              justifyContent="space-around"
              alignItems="center"
              spacing={2}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "bold",
                  width: "100%",
                  minHeight: 64,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                }}
              >
                {elem.name}
              </Typography>

              <Stack
                direction="column"
                justifyContent="space-around"
                alignItems="center"
                spacing={1}
              >
                <Chip
                  label={elem.category}
                  sx={{
                    borderRadius: 2,
                    color: "white",
                    width: "100%",
                    backgroundColor: "#27ae60",
                    fontFamily: "Inter",
                  }}
                />
              </Stack>

              <Typography color="#27ae60">
                {monetizeString(elem.price)}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <ListCarrousel>
      {listToRender(products.filter((elem, index) => index % 2))}
    </ListCarrousel>
  );
};
