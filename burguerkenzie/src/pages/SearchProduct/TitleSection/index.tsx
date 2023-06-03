import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { BoxSx } from "../../../libs/mui";
import { SearchSpan } from "./styles";

export const TitleSection = () => {
  const navigate = useNavigate();
  const { productSearch } = useParams();
  console.log(productSearch);

  return (
    <Box
      sx={{
        mt: 3,
        ...BoxSx,
        maxHeight: 400,
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        width: "100%",
        maxWidth: 1000,
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold" }}>
        Resultados para: <SearchSpan>{productSearch}</SearchSpan>
      </Typography>

      <Button variant="contained" onClick={() => navigate("/dashboard")}>
        Voltar para dashboard
      </Button>
    </Box>
  );
};
