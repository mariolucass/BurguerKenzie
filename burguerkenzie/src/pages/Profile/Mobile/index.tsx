import { Container, Grid } from "@mui/material";
import { ProfileForm } from "../ProfileForm";
import { ProfileRender } from "../ProfileRender";

export const MobileProfilePage = () => (
  <Container sx={{ mt: 2 }}>
    <Grid container spacing={2} direction={"column"}>
      <Grid item xs={4}>
        <ProfileRender />
      </Grid>

      <Grid item xs={4}>
        <ProfileForm />
      </Grid>
    </Grid>
  </Container>
);
