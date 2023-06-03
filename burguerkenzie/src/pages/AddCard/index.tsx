import { Container, Grid } from "@mui/material";
import { useMediaContext } from "../../contexts";
import { TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";
import { FormPayment } from "./CardForm";
import { CardIllustration } from "./CardRender";
import { MobileAddCardPage } from "./Mobile";
import { WarningMessage } from "./WarningMessage";

export const AddCardPage = () => {
  const { matches768 } = useMediaContext();
  if (!matches768) {
    return <MobileAddCardPage />;
  }

  return (
    <TransitionAnimation>
      <DivContainer>
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={2} direction={"row"}>
            <Grid item xs={8}>
              <CardIllustration />
            </Grid>

            <Grid
              item
              xs={4}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <FormPayment />
            </Grid>

            <Grid item xs={12}>
              <WarningMessage />
            </Grid>
          </Grid>
        </Container>
      </DivContainer>
    </TransitionAnimation>
  );
};
