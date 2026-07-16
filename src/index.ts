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
export { default as CircularProgress } from "./components/CircularProgress";
export type { CircularProgressProps } from "./components/CircularProgress.types";
export { default as Tooltip } from "./components/Tooltip";
export type { TooltipProps } from "./components/Tooltip.types";
export { default as Container } from "./components/Container";
export type { ContainerProps } from "./components/Container.types";
export { default as Paper } from "./components/Paper";
export type { PaperProps } from "./components/Paper.types";

export const SWAP_UI_VERSION = "2.0.0-alpha.0";
