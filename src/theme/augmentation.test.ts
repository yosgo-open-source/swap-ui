import { createTheme } from "@mui/material/styles";
import "./augmentation";
import { swapColors } from "./tokens";

test("augmentation 讓 swap palette 與自訂斷點通過型別檢查", () => {
  const theme = createTheme({
    palette: { swap: swapColors },
    breakpoints: { values: { xxs: 0, xs: 375, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 } },
  });
  expect(theme.palette.swap.primary.primary400).toBe("#4862CC");
  expect(theme.breakpoints.values.xxl).toBe(1400);
});

test("typography 自訂 variant 通過型別檢查", () => {
  const theme = createTheme({
    typography: { d1: { fontSize: "4.5rem" }, tiny2_loose: { fontSize: "0.625rem" } },
  });
  expect(theme.typography.d1.fontSize).toBe("4.5rem");
});
