import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext, useMediaContext } from "../../contexts";
import { TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";
import { AddressContent } from "./AddressSection";
import { MobileCheckout } from "./Mobile";
import { OrderContent } from "./OrderSection";
import { PaymentContent } from "./PaymentSection";
import { SubmitContent } from "./SubmitCheckout";

export const CheckoutPage = () => {
  const { currentSale } = useCartContext();
  useEffect(() => {
    !currentSale.length && navigate("/products/favourites");
  }, [currentSale]);

  const navigate = useNavigate();
  const { hasMinWidth900 } = useMediaContext();

  if (!hasMinWidth900) {
    return <MobileCheckout />;
  }

  return (
    <TransitionAnimation>
      <DivContainer>
        <Container sx={{ mt: 2, mb: 2 }}>
          <Grid container spacing={2} direction={"row"}>
            <Grid
              item
              xs={8}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <AddressContent />

              <PaymentContent />

              <OrderContent />
            </Grid>

            <Grid item xs={4} sx={{ display: "flex", flexDirection: "column" }}>
              <SubmitContent />
            </Grid>
          </Grid>
        </Container>
      </DivContainer>
    </TransitionAnimation>
  );
};
