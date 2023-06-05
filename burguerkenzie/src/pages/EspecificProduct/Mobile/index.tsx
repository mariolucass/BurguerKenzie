import { Container, Grid } from "@mui/material";
import { ProductCheckout } from "../ProductCheckout";
import { ProductContent } from "../ProductContent";

export const MobileEspecificProductPage = () => (
  <Container sx={{ mt: 2, mb: 2 }}>
    <Grid container spacing={2} direction={"column"}>
      <Grid item xs={4}>
        <ProductContent />
      </Grid>

      <Grid item xs={4}>
        <ProductCheckout />
      </Grid>
    </Grid>
  </Container>
);
