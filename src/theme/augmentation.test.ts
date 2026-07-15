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
