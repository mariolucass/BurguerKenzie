import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useMediaContext } from "../../../contexts";
import { BoxSx } from "../../../libs/mui";
import { SearchSpan } from "./styles";

export const TitleSection = () => {
  const navigate = useNavigate();
  const { productSearch } = useParams();
  const { hasMinWidth900 } = useMediaContext();

  return (
    <Box
      sx={{
        ...BoxSx,
        mt: 3,
        maxHeight: 400,
        backgroundColor: "rgba(255, 255, 255, 0.75)",
        maxWidth: 1000,
        display: "flex",
        justifyContent: "space-between",
        width: hasMinWidth900 ? "100%" : "95%",
        flexDirection: hasMinWidth900 ? "row" : "column",
        alignItems: hasMinWidth900 ? "flex-start" : "center",
      }}
    >
      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
        Resultados para: <SearchSpan>{productSearch}</SearchSpan>
      </Typography>

      <Button variant="contained" onClick={() => navigate("/dashboard")}>
        Voltar para dashboard
      </Button>
    </Box>
  );
};
