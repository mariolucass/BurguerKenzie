import { Container, Grid } from "@mui/material";
import { useMediaContext } from "../../contexts";
import { TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";
import { AddressForm } from "./AddressForm";
import { AddressIllustration } from "./AddressIlustration";
import { AddressRender } from "./AddressRender";
import { MobileAddressPage } from "./Mobile";

export const AddressPage = () => {
  const { hasMinWidth900 } = useMediaContext();
  if (!hasMinWidth900) {
    return <MobileAddressPage />;
  }

  return (
    <TransitionAnimation>
      <DivContainer>
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={2} direction={"row"}>
            <Grid item xs={8}>
              <AddressRender />
              <AddressIllustration />
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
    </TransitionAnimation>
  );
};
