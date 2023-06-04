import { Container, Grid } from "@mui/material";
import { AddressForm } from "../AddressForm";
import { AddressIllustration } from "../AddressIlustration";
import { AddressRender } from "../AddressRender";

export const MobileAddressPage = () => (
  <Container sx={{ mt: 2 }}>
    <Grid container spacing={2} direction={"column"}>
      <Grid item xs={4}>
        <AddressRender />
      </Grid>

      <Grid item xs={4}>
        <AddressIllustration />
      </Grid>

      <Grid item xs={4}>
        <AddressForm />
      </Grid>
    </Grid>
  </Container>
);
