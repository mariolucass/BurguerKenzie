import { Container, Grid } from "@mui/material";
import { CartPageContent } from "../CartContent";
import { CheckoutAndValue } from "../CheckoutAndValue";
import { CustomerMessage } from "../CustomerMessage";

export const MobileCartPage = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item xs={4}>
          <CartPageContent />
        </Grid>

        <Grid item xs={4}>
          <CheckoutAndValue />
        </Grid>

        <Grid item xs={4}>
          <CustomerMessage />
        </Grid>

        {/* <Grid item xs={4}>
          <CartPageRecommendations />
        </Grid> */}
      </Grid>
    </Container>
  );
};
