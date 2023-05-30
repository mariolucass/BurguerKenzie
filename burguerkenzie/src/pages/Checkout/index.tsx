import { Container, Grid } from "@mui/material";
import { DivContainer } from "../../styles/container";

export const CheckoutPage = () => {
  return (
    <DivContainer>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2} direction={"row"}>
          <Grid item xs={8}></Grid>

          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          ></Grid>
        </Grid>
      </Container>
    </DivContainer>
  );
};
