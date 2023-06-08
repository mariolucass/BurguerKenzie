import { Container, Grid } from "@mui/material";
import { AddressContent } from "../AddressSection";
import { OrderContent } from "../OrderSection";
import { PaymentContent } from "../PaymentSection";
import { SubmitContent } from "../SubmitCheckout";

export const MobileCheckout = () => {
  return (
    <Container sx={{ mt: 2, mb: 2 }}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item xs={4}>
          <AddressContent />
        </Grid>
        <Grid item xs={4}>
          <PaymentContent />
        </Grid>
        <Grid item xs={4}>
          <OrderContent />
        </Grid>
        <Grid item xs={4}>
          <SubmitContent />
        </Grid>
      </Grid>
    </Container>
  );
};
