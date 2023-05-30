import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useProductsContext } from "../../contexts";
import { ProductInterface } from "../../interfaces";
import { Grid, Container } from "@mui/material";
import { ProductImage } from "./ProductImage";
import { ProductDescription } from "./ProductDescription";
import { ProductCheckout } from "./ProductCheckout";
import { getAllProducts } from "../../services/api";
import { TransitionAnimation } from "../../layouts";

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
          >
            <ProductDescription
              name={productEspecific.name}
              category={productEspecific.category}
            />
          </Grid>

          <Grid item xs={4}></Grid>
        </Grid>
      </Container>
    </TransitionAnimation>
  );
};
