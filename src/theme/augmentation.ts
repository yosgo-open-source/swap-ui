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
