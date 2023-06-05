import { Container, Grid } from "@mui/material";
import { useCartContext, useMediaContext } from "../../contexts";
import { TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";
import { CartPageContent } from "./CartContent";
import { CartPageRecommendations } from "./CartRecommendations";
import { CheckoutAndValue } from "./CheckoutAndValue";
import { MobileCartPage } from "./Mobile";
import { PaymentsMethods } from "./PaymentsMethods";

export const CartPage = () => {
  const { currentSale } = useCartContext();
  const { hasMinWidth900 } = useMediaContext();
  if (!hasMinWidth900) {
    return <MobileCartPage />;
  }

  return (
    <TransitionAnimation>
      <DivContainer>
        <Container sx={{ mt: 2, mb: 2 }}>
          <Grid container spacing={2} direction={"row"}>
            <Grid item xs={8}>
              <CartPageContent />
            </Grid>

            {currentSale.length ? (
              <Grid
                item
                xs={4}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <CheckoutAndValue />
                <PaymentsMethods />
              </Grid>
            ) : (
              <Grid
                item
                xs={4}
                sx={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <PaymentsMethods />
              </Grid>
            )}

            <Grid item xs={12}>
              <CartPageRecommendations />
            </Grid>
          </Grid>
        </Container>
      </DivContainer>
    </TransitionAnimation>
  );
};
