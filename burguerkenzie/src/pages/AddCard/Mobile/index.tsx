import { Container, Grid } from "@mui/material";
import { FormPayment } from "../CardForm";
import { CardIllustration } from "../CardRender";
import { WarningMessage } from "../WarningMessage";

export const MobileAddCardPage = () => {
  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={2} direction={"column"}>
        <Grid item xs={4}>
          <CardIllustration />
        </Grid>

        <Grid item xs={5}>
          <FormPayment />
        </Grid>

        <Grid item xs={5}>
          <WarningMessage />
        </Grid>
      </Grid>
    </Container>
  );
};
