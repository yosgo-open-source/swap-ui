import { createTheme, type Theme, type ThemeOptions } from "@mui/material/styles";
import { deepmerge } from "@mui/utils";
import "./augmentation";
import { swapColors, swapRadius, swapShadows, swapBreakpoints, swapFontFamily } from "./tokens";
import { buttonRootStyles, buttonVariants } from "./button.styles";

const c = swapColors;

export function createSwapTheme(options?: ThemeOptions): Theme {
  // 以 deepmerge 先併入 options 再建 theme：cssVariables 模式下 createTheme
  // 的第二參數合併不會覆蓋已生成的色彩方案，故不可用 createTheme(base, options)。
  const base: ThemeOptions = {
      cssVariables: true,
      palette: {
        primary: { main: c.primary.primary400 },
        error: { main: c.danger.danger800 },
        success: { main: c.success.success500 },
        warning: { main: c.secondary.secondary500 },
        swap: c,
      },
      breakpoints: {
        values: {
          xxs: swapBreakpoints.xxs,
          xs: swapBreakpoints.xs,
          sm: swapBreakpoints.sm,
          md: swapBreakpoints.md,
          lg: swapBreakpoints.lg,
          xl: swapBreakpoints.xl,
          xxl: swapBreakpoints.xxl,
        },
      },
      shape: { borderRadius: 8 },
      typography: { fontFamily: swapFontFamily },
      components: {
        MuiButton: {
          defaultProps: {
            variant: "primary",
            disableElevation: true,
            disableFocusRipple: true,
          },
          styleOverrides: {
            root: { ...buttonRootStyles, variants: buttonVariants },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: { borderRadius: "18px", border: "1px solid rgba(0, 0, 0, 0.13)" },
          },
        },
        MuiPaper: {
          styleOverrides: {
            root: { border: `1px solid ${c.black.black500}` },
            rounded: { borderRadius: swapRadius.m },
            elevation8: { boxShadow: swapShadows.m },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: { root: { borderRadius: swapRadius.m } },
        },
        MuiFormHelperText: {
          styleOverrides: {
            root: {
              marginTop: 4,
              fontSize: 14,
              color: c.black.black700,
              "&.Mui-error": { color: c.danger.danger800 },
            },
          },
        },
        MuiIconButton: {
          styleOverrides: { root: { padding: 0 } },
        },
      },
  };
  return createTheme(deepmerge(base, options ?? {}));
}
