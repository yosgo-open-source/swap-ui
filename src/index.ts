export { SWAPThemeProvider } from "./theme/SWAPThemeProvider";
export type { SWAPThemeProviderProps } from "./theme/SWAPThemeProvider";
export { createSwapTheme } from "./theme/createSwapTheme";
export {
  swapColors,
  swapRadius,
  swapShadows,
  swapBreakpoints,
  swapFontFamily,
} from "./theme/tokens";
export type { SwapColors } from "./theme/tokens";

export { default as Typography } from "./components/Typography";
export type { SwapTypographyProps } from "./components/Typography";
export { default as Chip } from "./components/Chip";
export type { ChipProps } from "./components/Chip.types";

export const SWAP_UI_VERSION = "2.0.0-alpha.0";
