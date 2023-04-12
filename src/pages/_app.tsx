import "@/styles/globals.sass";
import { useState, useEffect } from "react";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import { Inter } from "next/font/google";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import lightTheme from "../styles/lightTheme";
import darkTheme from "../styles/darkTheme";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({ subsets: ["latin"] });

const selectedThemeLight = createTheme({
  ...lightTheme,
  typography: {
    fontFamily: inter.fontFamily,
  },
});

const selectedThemeDark = createTheme({
  ...darkTheme,
  typography: {
    fontFamily: inter.fontFamily,
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const [themeType, setThemeType] = useState("light");

  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setThemeType(prefersDarkMode ? "dark" : "light");
  }, []);

  const toggleTheme = () => {
    const newThemeType = themeType === "light" ? "dark" : "light";
    setThemeType(newThemeType);
    const newTheme =
      newThemeType === "light" ? selectedThemeLight : selectedThemeDark;
    document.cookie = `theme=${newThemeType}; path=/`;
  };

  const selectedTheme =
    themeType === "light" ? selectedThemeLight : selectedThemeDark;

  return (
    <ThemeProvider theme={selectedTheme}>
      <Layout>
        <main className={inter.className}>
          <CssBaseline />
          <Component {...pageProps} />
        </main>
      </Layout>
    </ThemeProvider>
  );
}
