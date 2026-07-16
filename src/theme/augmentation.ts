import type * as React from "react";
import type { SwapColors } from "./tokens";

declare module "@mui/material/styles" {
  interface Palette {
    swap: SwapColors;
  }
  interface PaletteOptions {
    swap?: SwapColors;
  }
  interface BreakpointOverrides {
    xxs: true;
    xxl: true;
  }
  // SWAP 自訂字級 variant（h1–h6、body1、body2 為 MUI 內建，僅覆蓋數值不在此重列）
  interface TypographyVariants {
    d1: React.CSSProperties; d2: React.CSSProperties; d3: React.CSSProperties; d4: React.CSSProperties;
    title: React.CSSProperties; subtitle: React.CSSProperties;
    caption1: React.CSSProperties; caption2: React.CSSProperties;
    small1: React.CSSProperties; small2: React.CSSProperties;
    tiny1: React.CSSProperties; tiny2: React.CSSProperties;
    button_l: React.CSSProperties; button_s: React.CSSProperties;
    title_loose: React.CSSProperties; subtitle_loose: React.CSSProperties;
    body1_loose: React.CSSProperties; body2_loose: React.CSSProperties;
    caption1_loose: React.CSSProperties; caption2_loose: React.CSSProperties;
    small1_loose: React.CSSProperties; small2_loose: React.CSSProperties;
    tiny1_loose: React.CSSProperties; tiny2_loose: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    d1?: React.CSSProperties; d2?: React.CSSProperties; d3?: React.CSSProperties; d4?: React.CSSProperties;
    title?: React.CSSProperties; subtitle?: React.CSSProperties;
    caption1?: React.CSSProperties; caption2?: React.CSSProperties;
    small1?: React.CSSProperties; small2?: React.CSSProperties;
    tiny1?: React.CSSProperties; tiny2?: React.CSSProperties;
    button_l?: React.CSSProperties; button_s?: React.CSSProperties;
    title_loose?: React.CSSProperties; subtitle_loose?: React.CSSProperties;
    body1_loose?: React.CSSProperties; body2_loose?: React.CSSProperties;
    caption1_loose?: React.CSSProperties; caption2_loose?: React.CSSProperties;
    small1_loose?: React.CSSProperties; small2_loose?: React.CSSProperties;
    tiny1_loose?: React.CSSProperties; tiny2_loose?: React.CSSProperties;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    primary: true;
    secondary: true;
    tertiary: true;
    black: true;
    danger: true;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    d1: true; d2: true; d3: true; d4: true;
    title: true; subtitle: true;
    caption1: true; caption2: true;
    small1: true; small2: true;
    tiny1: true; tiny2: true;
    button_l: true; button_s: true;
    title_loose: true; subtitle_loose: true;
    body1_loose: true; body2_loose: true;
    caption1_loose: true; caption2_loose: true;
    small1_loose: true; small2_loose: true;
    tiny1_loose: true; tiny2_loose: true;
  }
}
