import { Container, Grid } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts";
import { TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";
import { AddressContent } from "./AddressSection";
import { OrderContent } from "./OrderSection";
import { PaymentContent } from "./PaymentSection";
import { SubmitContent } from "./SubmitCheckout";
export const CheckoutPage = () => {
  const navigate = useNavigate();
  const { currentSale } = useCartContext();

  useEffect(() => {
    if (!currentSale.length) {
      navigate("/products/favourites");
    }
  }, [currentSale]);

  return (
    <TransitionAnimation>
      <DivContainer>
        <Container sx={{ mt: 2 }}>
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
