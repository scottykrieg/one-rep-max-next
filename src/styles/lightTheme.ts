import { createTheme, ThemeOptions } from "@material-ui/core/styles";

const lightTheme: ThemeOptions = createTheme({
  palette: {
    type: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#333",
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#333",
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1.2rem",
      lineHeight: 1.5,
      color: "#666",
    },
    button: {
      textTransform: "none",
    },
  },
});

export default lightTheme;
