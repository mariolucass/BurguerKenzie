import { Container, Grid } from "@mui/material";
import { useMediaContext } from "../../contexts";
import { TransitionAnimation } from "../../layouts";
import { DivContainer } from "../../styles/container";
import { MobileProfilePage } from "./Mobile";
import { ProfileForm } from "./ProfileForm";
import { ProfileRender } from "./ProfileRender";

export const ProfilePage = () => {
  const { hasMinWidth900 } = useMediaContext();

  if (!hasMinWidth900) {
    return <MobileProfilePage />;
  }

  return (
    <TransitionAnimation>
      <DivContainer>
        <Container sx={{ mt: 2 }}>
          <Grid container spacing={2} direction={"row"}>
            <Grid item xs={8}>
              <ProfileRender />
            </Grid>

            <Grid
              item
              xs={4}
              sx={{ display: "flex", flexDirection: "column", gap: 2 }}
            >
              <ProfileForm />
            </Grid>
          </Grid>
        </Container>
      </DivContainer>
    </TransitionAnimation>
  );
};
