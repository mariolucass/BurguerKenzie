import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaContext, useProductsContext } from "../../contexts";
import { ProductInterface } from "../../interfaces/products";
import { TransitionAnimation } from "../../layouts";
import { getAllProducts } from "../../services/api";
import { MobileEspecificProductPage } from "./Mobile";
import { ProductCheckout } from "./ProductCheckout";
import { ProductContent } from "./ProductImage";

export const EspecificProductPage = () => {
  const { productId } = useParams();
  const { products, setProductEspecific } = useProductsContext();
  const { matches768 } = useMediaContext();

  useEffect(() => {
    if (products.length) {
      const product = products.find((product) => product.id === +productId!);
      if (product) {
        setProductEspecific(product);
      }
    } else {
      (async () => {
        const products: ProductInterface[] = await getAllProducts();
        const product = products.find((product) => product.id === +productId!);
        if (product) {
          setProductEspecific(product);
        }
      })();
    }
  }, []);

  if (!matches768) {
    return <MobileEspecificProductPage />;
  }

  return (
    <TransitionAnimation>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2} direction={"row"}>
          <Grid item xs={8} sx={{ minHeight: 350 }}>
            <ProductContent />
          </Grid>

          <Grid item xs={4}>
            <ProductCheckout />
          </Grid>
        </Grid>
      </Container>
    </TransitionAnimation>
  );
};
