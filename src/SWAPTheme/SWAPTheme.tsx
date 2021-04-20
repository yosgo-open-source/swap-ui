import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { SWAPThemeProps } from "./SWAPTheme.types";
import { CssBaseline } from "@material-ui/core";

const SWAPDefaultTheme = {
  //Design Token
  //Color
  palette: {
    primary: {
      main: "#4862CC",
    },
  },
  primary: {
    primary50: "#E6E9F8",
    primary100: "#C1C7ED",
    primary200: "#97A3E1",
    primary300: "#6C7FD5",
    primary400: "#4862CC",
    primary500: "#1747C2",
    primary600: "#0F3FB8",
    primary700: "#0035AC",
    primary800: "#1F3C8E",
    primary900: "#002BA1",
    primaryA11y: "#071E60",
  },
  secondary: {
    secondary50: "#FEF8E3",
    secondary100: "#FCECB7",
    secondary200: "#FBDF8A",
    secondary300: "#FAD45C",
    secondary400: "#F9C93F",
    secondary500: "#F8C131",
    secondary600: "#F7B52C",
    secondary700: "#F6A128",
    secondary800: "#F59225",
    secondary900: "#F27521",
    secondaryA11y: "#E5640C",
  },
  danger: {
    danger50: "#FFEBED",
    danger100: "#FFCCD0",
    danger200: "#F99894",
    danger300: "#F26E6A",
    danger400: "#FC4A43",
    danger500: "#FF3622",
    danger600: "#F32A23",
    danger700: "#E11C1E",
    danger800: "#D40F14",
    danger900: "#C60003",
    dangerA11y: "#A80003",
  },
  success: {
    success50: "#E6F6E8",
    success100: "#C3E8C6",
    success200: "#9BD9A1",
    success300: "#70CB7A",
    success400: "#4CC05D",
    success500: "#1EB43F",
    success600: "#10A535",
    success700: "#00932A",
    success800: "#00821E",
    success900: "#006305",
    successA11y: "#015C16",
  },
  black: {
    white: "#FFFFFF",
    black100: "#F9F9F9",
    black200: "#F6F6F6",
    black300: "#F2F2F2",
    black400: "#ECECEC",
    black500: "#CCCCCC",
    black600: "#909090",
    black700: "#6F6F6F",
    black800: "#4B4B4B",
    black900: "#2D2D2D",
    black1000: "#000000",
  },
  //  Border Radius
  borderRadius: {
    s: "4px",
    m: "8px",
    l: "12px",
    xl: "20px",
  },
  //Shadow
  boxShadow: {
    s: " 0px 2px 4px rgba(0, 0, 0, 0.12)",
    m: "0px 4px 12px rgba(0, 0, 0, 0.1)",
    l: "0px 6px 24px rgba(0, 0, 0, 0.1)",
    xl: "0px 8px 40px rgba(0, 0, 0, 0.12)",
  },
  //Typography
  typography: {
    //字形
    fontFamily: ["MPLUSRounded1c", "NotoSansTC", "sans-serif"].join(","),
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          {
            fontFamily: "MPLUSRounded1c",
            src: `url(https://cdn.leafscape.be/rounded-Mplus/rounded-mplus-1c-regular_web.woff2) format('woff2')`,
            unicodeRange: "U+00-024F",
            fontWeight: "normal",
          },
          {
            fontFamily: "MPLUSRounded1c",
            src: `url(https://cdn.leafscape.be/rounded-Mplus/rounded-mplus-1c-bold_web.woff2) format('woff2')`,
            unicodeRange: "U+00-024F",
            fontWeight: "bold",
          },
          {
            fontFamily: "NotoSansTC",
            src: `url(https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Regular.woff2) format('woff2')`,
            fontWeight: "normal",
          },
          {
            fontFamily: "NotoSansTC",
            src: `url(https://fonts.gstatic.com/ea/notosanstc/v1/NotoSansTC-Bold.woff2) format('woff2')`,
            fontWeight: "bold",
          },
        ],
      },
    },
    MuiCard: {
      root: {
        borderRadius: "18px",
        border: "1px solid rgba(0, 0, 0, 0.13)",
      },
    },
    MuiPaper: {
      root: {
        border: "1px solid #cccccc",
      },
      rounded: {
        borderRadius: "8px",
      },
      elevation8: {
        boxShadow: " 0px 4px 12px rgba(0, 0, 0, 0.1)",
      },
    },
    //Input
    //Menu
    MuiOutlinedInput: {
      root: {
        borderRadius: "8px",
      },
    },
    MuiFormHelperText: {
      root: {
        marginTop: 4,
        fontSize: 14,
        color: "#6f6f6f",
        "&.Mui-error": {
          color: "#D40F14",
        },
      },
    },
    // IconButton fix safari padding problem
    MuiIconButton: {
      root: {
        padding: 0,
      },
    },
  },
};

const SWAPTheme: React.FC<SWAPThemeProps> = ({ themeOptions, children }) => {
  const theme = themeOptions
    ? createMuiTheme(themeOptions)
    : createMuiTheme(SWAPDefaultTheme);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
export { createMuiTheme, CssBaseline, ThemeProvider };

export default SWAPTheme;
