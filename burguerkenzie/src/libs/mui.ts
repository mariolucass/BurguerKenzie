import { ThemeOptions, createTheme } from "@mui/material/styles";

export const BoxSx = {
  borderRadius: 1,
  padding: 6,
  backgroundColor: "white",
  boxShadow:
    "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
};

export const ImageSx = {
  backgroundColor: "white",
  objectFit: "contain",
  width: "100%",
  height: "100%",
  padding: 2,
  maxHeight: 350,
};

export const themeOptions: ThemeOptions = {
  typography: {
    fontFamily: "Inter",

    button: {
      fontWeight: 500,
      color: "white",
    },
  },

  shape: {
    borderRadius: 8,
  },

  palette: {
    mode: "light",
    primary: {
      main: "#27AE60",
      contrastText: "#fff",
    },
  },
};

export const theme = createTheme(themeOptions);
