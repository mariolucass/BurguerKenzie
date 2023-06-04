import { Container, Grid } from "@mui/material";
import { useCartContext } from "../../../contexts";
import { CartPageContent } from "../CartContent";
import { CheckoutAndValue } from "../CheckoutAndValue";
import { PaymentsMethods } from "../PaymentsMethods";

export const MobileCartPage = () => {
  const { currentSale } = useCartContext();
  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item xs={4}>
          <CartPageContent />
        </Grid>

        {currentSale && (
          <Grid item xs={4}>
            <CheckoutAndValue />
          </Grid>
        )}

        <Grid item xs={4}>
          <PaymentsMethods />
        </Grid>

        {/* <Grid item xs={4}>
          <CartPageRecommendations />
        </Grid> */}
      </Grid>
    </Container>
  );
};
