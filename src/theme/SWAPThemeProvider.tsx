import * as React from "react";
import { ThemeProvider, type Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createSwapTheme } from "./createSwapTheme";

import "@fontsource/m-plus-rounded-1c/400.css";
import "@fontsource/m-plus-rounded-1c/700.css";
import "@fontsource/noto-sans-tc/400.css";
import "@fontsource/noto-sans-tc/700.css";

export interface SWAPThemeProviderProps {
  theme?: Theme;
  children?: React.ReactNode;
}

const defaultTheme = createSwapTheme();

export const SWAPThemeProvider: React.FC<SWAPThemeProviderProps> = ({ theme, children }) => (
  <ThemeProvider theme={theme ?? defaultTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
