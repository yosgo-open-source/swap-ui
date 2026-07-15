import { swapColors, swapRadius, swapShadows, swapBreakpoints, swapFontFamily } from "./tokens";

test("primary 色階與 v1 一致", () => {
  expect(swapColors.primary.primary400).toBe("#4862CC");
  expect(swapColors.primary.primary500).toBe("#1747C2");
  expect(swapColors.primary.primaryA11y).toBe("#071E60");
});

test("danger/success/black 關鍵值", () => {
  expect(swapColors.danger.danger800).toBe("#D40F14");
  expect(swapColors.success.success500).toBe("#1EB43F");
  expect(swapColors.black.white).toBe("#FFFFFF");
  expect(swapColors.black.black1000).toBe("#000000");
});

test("圓角/陰影/斷點/字體", () => {
  expect(swapRadius.m).toBe("8px");
  expect(swapShadows.m).toBe("0px 4px 12px rgba(0, 0, 0, 0.1)");
  expect(swapBreakpoints.xxl).toBe(1400);
  expect(swapBreakpoints.xs).toBe(375);
  expect(swapFontFamily).toContain("M PLUS Rounded 1c");
  expect(swapFontFamily).toContain("Noto Sans TC");
});
