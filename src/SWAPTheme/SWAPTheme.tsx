import React from "react";
import styled from "styled-components";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { SWAPThemeProps } from "./SWAPTheme.types";
import { CssBaseline } from "@material-ui/core";
import MPLUSRounded1c from "../fonts/MPLUSRounded1c-Regular.ttf";
import MPLUSRounded1c_Bold from "../fonts/MPLUSRounded1c-Bold.ttf";
import NotoSansTC from "../fonts/NotoSansTC-Regular.otf";
import NotoSansTC_Bold from "../fonts/NotoSansTC-Bold.otf";

const SWAPDefaultTheme = {
  //Design Token
  //Color
  palette: {
    primary: {
      main: "#1f3c8e",
    },
    neutral: {
      main: "#5c6ac4",
    },
  },
  primary: {
    primary50: "#E8EBF5",
    primary100: "#C4CCE7",
    primary200: "#9DABD7",
    primary300: "#768AC7",
    primary400: "#5770BB",
    primary500: "#3757B0",
    primary600: "#314FA6",
    primary700: "#27459A",
    primary800: "#1F3C8E",
    primary900: "#102A78",
    primaryA11y: "#121D3B",
  },
  secondary: {
    secondary50: "#FEF4E5",
    secondary100: "#FEE3BE",
    secondary200: "#FED195",
    secondary300: "#FEBF6E",
    secondary400: "#FDB156",
    secondary500: "#FBA54A",
    secondary600: "#F69A46",
    secondary700: "#EE8B41",
    secondary800: "#E67E3E",
    secondary900: "#D96B3A",
    secondaryA11y: "#B74412",
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
    black200: "#F9F9F9",
    black300: "#F2F2F2",
    black400: "#ECECEC",
    black500: "#CCCCCC",
    black600: "#909090",
    black700: "#6F6F6F",
    black800: "#4B4B4B",
    black900: "#2D2D2D",
    black1000: " #000000",
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
            src: `url(${MPLUSRounded1c})`,
            unicodeRange: "U+00-024F",
            fontWeight: "normal",
          },
          {
            fontFamily: "MPLUSRounded1c",
            src: `url(${MPLUSRounded1c_Bold})`,
            unicodeRange: "U+00-024F",
            fontWeight: "bold",
          },
          {
            fontFamily: "NotoSansTC",
            src: `url(${NotoSansTC})`,
            fontWeight: "normal",
          },
          {
            fontFamily: "NotoSansTC",
            src: `url(${NotoSansTC_Bold})`,
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
      rounded: {
        borderRadius: "15px",
      },
    },
    MuiCheckbox: {
      colorPrimary: {
        color: "#cccccc",
        "&$checked": {
          color: "#173a9b",
        },
        "&$disabled": {
          opacity: 0.4,
          color: "#cccccc",
          "&$checked": {
            color: "#173a9b",
          },
        },
        "&:hover": {
          backgroundColor: "rgba(0%,0%,0%,0.05)",
        },
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
      <SWAPThemeWrap>{children}</SWAPThemeWrap>
    </ThemeProvider>
  );
};

const SWAPThemeWrap = styled.div``;

export default SWAPTheme;
