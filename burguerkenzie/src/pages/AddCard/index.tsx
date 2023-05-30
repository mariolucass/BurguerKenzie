import { FormPayment } from "./FormPayment";
import { Container, Grid } from "@mui/material";
import { DivContainer } from "../../styles/container";
import { CardIllustration } from "./CardIllustration";

export const AddCardPage = () => {
  return (
    <DivContainer>
      <Container sx={{ mt: 2 }}>
        <Grid container spacing={2} direction={"row"}>
          <Grid item xs={8}>
            <CardIllustration />
          </Grid>

          <Grid
            item
            xs={4}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormPayment />
          </Grid>
        </Grid>
      </Container>
    </DivContainer>
  );
};
