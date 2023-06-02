import { Container, Grid } from "@mui/material";
import { DivContainer } from "../../styles/container";
import { ProfileForm } from "./ProfileForm";
import { ProfileRender } from "./ProfileRender";

export const ProfilePage = () => {
  return (
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
  );
};
