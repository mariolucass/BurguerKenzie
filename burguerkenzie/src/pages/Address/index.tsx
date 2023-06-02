import { Container, Grid } from "@mui/material";
import { DivContainer } from "../../styles/container";
import { AddressForm } from "./AddressForm";
import { AddressRender } from "./AddressRender";

export const AddressPage = () => {
  return (
    <DivContainer>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2} direction={"row"}>
          <Grid item xs={8}>
            <AddressRender />
          </Grid>

          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <AddressForm />
          </Grid>
        </Grid>
      </Container>
    </DivContainer>
  );
};
