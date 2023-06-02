import { Container, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useProductsContext } from "../../contexts";
import { ProductInterface } from "../../interfaces";
import { TransitionAnimation } from "../../layouts";
import { getAllProducts } from "../../services/api";
import { ProductCheckout } from "./ProductCheckout";
import { ProductDescription } from "./ProductDescription";
import { ProductImage } from "./ProductImage";

export const EspecificProductPage = () => {
  const { productId } = useParams();
  const { products } = useProductsContext();

  const [productEspecific, setProductEspecific] = useState<ProductInterface>(
    {} as ProductInterface
  );

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

  return (
    <TransitionAnimation>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2} direction={"row"}>
          <Grid item xs={8} sx={{ minHeight: 350 }}>
            <ProductDescription
              name={productEspecific.name}
              category={productEspecific.category}
            />
            <ProductImage src={productEspecific.img} />
          </Grid>

          <Grid item xs={4}>
            <ProductCheckout
              id={productEspecific.id}
              price={productEspecific.price}
            />
          </Grid>

          <Grid
            item
            xs={8}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          ></Grid>

          <Grid item xs={4}></Grid>
        </Grid>
      </Container>
    </TransitionAnimation>
  );
};
