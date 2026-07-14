import { ThemeOptions } from "@material-ui/core";

export interface SWAPThemeProps {
  themeOptions?: ThemeOptions;
  children: React.ReactNode;
}
//Palette
declare module "@material-ui/core/styles" {
  interface Theme {
    primary: {
      primary50: React.CSSProperties["color"];
      primary100: React.CSSProperties["color"];
      primary200: React.CSSProperties["color"];
      primary300: React.CSSProperties["color"];
      primary400: React.CSSProperties["color"];
      primary500: React.CSSProperties["color"];
      primary600: React.CSSProperties["color"];
      primary700: React.CSSProperties["color"];
      primary800: React.CSSProperties["color"];
      primary900: React.CSSProperties["color"];
      primaryA11y: React.CSSProperties["color"];
    };
    secondary: {
      secondary50: React.CSSProperties["color"];
      secondary100: React.CSSProperties["color"];
      secondary200: React.CSSProperties["color"];
      secondary300: React.CSSProperties["color"];
      secondary400: React.CSSProperties["color"];
      secondary500: React.CSSProperties["color"];
      secondary600: React.CSSProperties["color"];
      secondary700: React.CSSProperties["color"];
      secondary800: React.CSSProperties["color"];
      secondary900: React.CSSProperties["color"];
      secondaryA11y: React.CSSProperties["color"];
    };
    danger: {
      danger50: React.CSSProperties["color"];
      danger100: React.CSSProperties["color"];
      danger200: React.CSSProperties["color"];
      danger300: React.CSSProperties["color"];
      danger400: React.CSSProperties["color"];
      danger500: React.CSSProperties["color"];
      danger600: React.CSSProperties["color"];
      danger700: React.CSSProperties["color"];
      danger800: React.CSSProperties["color"];
      danger900: React.CSSProperties["color"];
      dangerA11y: React.CSSProperties["color"];
    };
    success: {
      success50: React.CSSProperties["color"];
      success100: React.CSSProperties["color"];
      success200: React.CSSProperties["color"];
      success300: React.CSSProperties["color"];
      success400: React.CSSProperties["color"];
      success500: React.CSSProperties["color"];
      success600: React.CSSProperties["color"];
      success700: React.CSSProperties["color"];
      success800: React.CSSProperties["color"];
      success900: React.CSSProperties["color"];
      successA11y: React.CSSProperties["color"];
    };
    black: {
      white: React.CSSProperties["color"];
      black100: React.CSSProperties["color"];
      black200: React.CSSProperties["color"];
      black300: React.CSSProperties["color"];
      black400: React.CSSProperties["color"];
      black500: React.CSSProperties["color"];
      black600: React.CSSProperties["color"];
      black700: React.CSSProperties["color"];
      black800: React.CSSProperties["color"];
      black900: React.CSSProperties["color"];
      black1000: React.CSSProperties["color"];
    };
    borderRadius: {
      s: React.CSSProperties["borderRadius"];
      m: React.CSSProperties["borderRadius"];
      l: React.CSSProperties["borderRadius"];
      xl: React.CSSProperties["borderRadius"];
    };
    boxShadow: {
      s: React.CSSProperties["boxShadow"];
      m: React.CSSProperties["boxShadow"];
      l: React.CSSProperties["boxShadow"];
      xl: React.CSSProperties["boxShadow"];
    };
  }

  interface ThemeOptions {
    primary: {
      primary50: React.CSSProperties["color"];
      primary100: React.CSSProperties["color"];
      primary200: React.CSSProperties["color"];
      primary300: React.CSSProperties["color"];
      primary400: React.CSSProperties["color"];
      primary500: React.CSSProperties["color"];
      primary600: React.CSSProperties["color"];
      primary700: React.CSSProperties["color"];
      primary800: React.CSSProperties["color"];
      primary900: React.CSSProperties["color"];
      primaryA11y: React.CSSProperties["color"];
    };
    secondary: {
      secondary50: React.CSSProperties["color"];
      secondary100: React.CSSProperties["color"];
      secondary200: React.CSSProperties["color"];
      secondary300: React.CSSProperties["color"];
      secondary400: React.CSSProperties["color"];
      secondary500: React.CSSProperties["color"];
      secondary600: React.CSSProperties["color"];
      secondary700: React.CSSProperties["color"];
      secondary800: React.CSSProperties["color"];
      secondary900: React.CSSProperties["color"];
      secondaryA11y: React.CSSProperties["color"];
    };
    danger: {
      danger50: React.CSSProperties["color"];
      danger100: React.CSSProperties["color"];
      danger200: React.CSSProperties["color"];
      danger300: React.CSSProperties["color"];
      danger400: React.CSSProperties["color"];
      danger500: React.CSSProperties["color"];
      danger600: React.CSSProperties["color"];
      danger700: React.CSSProperties["color"];
      danger800: React.CSSProperties["color"];
      danger900: React.CSSProperties["color"];
      dangerA11y: React.CSSProperties["color"];
    };
    success: {
      success50: React.CSSProperties["color"];
      success100: React.CSSProperties["color"];
      success200: React.CSSProperties["color"];
      success300: React.CSSProperties["color"];
      success400: React.CSSProperties["color"];
      success500: React.CSSProperties["color"];
      success600: React.CSSProperties["color"];
      success700: React.CSSProperties["color"];
      success800: React.CSSProperties["color"];
      success900: React.CSSProperties["color"];
      successA11y: React.CSSProperties["color"];
    };
    black: {
      white: React.CSSProperties["color"];
      black100: React.CSSProperties["color"];
      black200: React.CSSProperties["color"];
      black300: React.CSSProperties["color"];
      black400: React.CSSProperties["color"];
      black500: React.CSSProperties["color"];
      black600: React.CSSProperties["color"];
      black700: React.CSSProperties["color"];
      black800: React.CSSProperties["color"];
      black900: React.CSSProperties["color"];
      black1000: React.CSSProperties["color"];
    };
    borderRadius: {
      s: React.CSSProperties["borderRadius"];
      m: React.CSSProperties["borderRadius"];
      l: React.CSSProperties["borderRadius"];
      xl: React.CSSProperties["borderRadius"];
    };
    boxShadow: {
      s: React.CSSProperties["boxShadow"];
      m: React.CSSProperties["boxShadow"];
      l: React.CSSProperties["boxShadow"];
      xl: React.CSSProperties["boxShadow"];
    };
  }
}
