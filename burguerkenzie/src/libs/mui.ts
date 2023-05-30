import { ThemeOptions, createTheme } from "@mui/material/styles";

export const BoxSx = {
  borderRadius: 1,
  padding: 6,
  maxHeight: 400,
  backgroundColor: "white",
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
