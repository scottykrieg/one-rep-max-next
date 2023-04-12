import { createTheme, ThemeOptions } from "@material-ui/core/styles";

const darkTheme: ThemeOptions = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#90caf9",
    },
    secondary: {
      main: "#f48fb1",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 16,
    fontWeightRegular: 400,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      color: "#fff",
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      color: "#fff",
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1.2rem",
      lineHeight: 1.5,
      color: "#ccc",
    },
    button: {
      textTransform: "none",
    },
  },
});

export default darkTheme;
