import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useMediaContext, useProductsContext } from "../../contexts";
import { ProductInterface } from "../../interfaces/products";
import { TransitionAnimation } from "../../layouts";
import { getAllProducts } from "../../services/api";
import { MobileEspecificProductPage } from "./Mobile";
import { ProductCheckout } from "./ProductCheckout";
import { ProductContent } from "./ProductContent";

export const EspecificProductPage = () => {
  const { productId } = useParams();
  const { products, setProductEspecific } = useProductsContext();
  const { hasMinWidth900 } = useMediaContext();

  const getEspecificProductWithoutFetch = () => {
    const product = products.find((product) => product.id === +productId!);

    if (product) {
      document.title = `BurguerKenzie - ${product.name}`;
      setProductEspecific(product);
    } else {
    }
  };

  const getEspecificProductWithFetch = async () => {
    const products: ProductInterface[] = await getAllProducts();
    const product = products.find((product) => product.id === +productId!);

    if (product) {
      document.title = `BurguerKenzie - ${product.name}`;
      setProductEspecific(product);
    } else {
    }
  };

  useEffect(() => {
    products.length
      ? getEspecificProductWithoutFetch()
      : getEspecificProductWithFetch();
  }, []);

  if (!hasMinWidth900) {
    return <MobileEspecificProductPage />;
  }

  return (
    <TransitionAnimation>
      <Container sx={{ mt: 2, mb: 2 }}>
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
