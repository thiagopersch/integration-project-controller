import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#0DA6A6",
      light: "#3DD5D6",
      dark: "#004747",
    },
    secondary: {
      main: "#F7685B",
      light: "#F8867B",
      dark: "#AC483F",
    },
    error: {
      main: "#FF0031",
      light: "#F0758D",
      dark: "#99001D",
    },
    warning: {
      main: "#FFB946",
      light: "#FFC76B",
      dark: "#B28131",
    },
    info: {
      main: "#2196f3",
      light: "#64B5F6",
      dark: "#1976D2",
    },
    success: {
      main: "#2ED47A",
      light: "#57DC94",
      dark: "#209455",
    },
  },
});
