import * as React from "react";
import { ThemeProvider, type Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createSwapTheme } from "./createSwapTheme";

// 只載 latin 子集：M PLUS 是日文字型，其読点（，。）貼左下，與台灣置中慣例不符。
// latin 子集不含 CJK 字形，中文字與中文標點會逐字 fallback 到 Noto Sans TC（標點置中）。
// 同時大幅減少字檔下載（完整版 126 子集 → latin 22KB×2）並統一漢字風格。v1 以 unicodeRange 達成同效。
import "@fontsource/m-plus-rounded-1c/latin-400.css";
import "@fontsource/m-plus-rounded-1c/latin-700.css";
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
