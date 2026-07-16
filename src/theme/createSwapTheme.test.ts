import { createSwapTheme } from "./createSwapTheme";

test("品牌 palette 主色", () => {
  const t = createSwapTheme();
  expect(t.palette.primary.main).toBe("#4862CC");
  expect(t.palette.error.main).toBe("#D40F14");
  expect(t.palette.success.main).toBe("#1EB43F");
  expect(t.palette.swap.primary.primary400).toBe("#4862CC");
});

test("自訂斷點寫入 theme", () => {
  const t = createSwapTheme();
  expect(t.breakpoints.values.xs).toBe(375);
  expect(t.breakpoints.values.xxl).toBe(1400);
});

test("shape / typography / cssVariables", () => {
  const t = createSwapTheme();
  expect(t.shape.borderRadius).toBe(8);
  expect(t.typography.fontFamily).toContain("M PLUS Rounded 1c");
  expect(t.vars).toBeTruthy(); // cssVariables: true 會生成 theme.vars
});

test("元件 overrides 就位", () => {
  const t = createSwapTheme();
  expect(t.components?.MuiCard?.styleOverrides).toBeDefined();
  expect(t.components?.MuiOutlinedInput?.styleOverrides).toBeDefined();
  expect(t.components?.MuiIconButton?.styleOverrides).toBeDefined();
});

test("options 可覆蓋", () => {
  const t = createSwapTheme({ palette: { primary: { main: "#000000" } } });
  expect(t.palette.primary.main).toBe("#000000");
});

test("typography variants 併入 theme", () => {
  const t = createSwapTheme();
  const typ = t.typography as unknown as Record<string, { fontSize?: string; fontWeight?: number }>;
  expect(typ.d1.fontSize).toBe("4.5rem");
  expect(typ.button_l.fontWeight).toBe(700);
  const mapping = t.components?.MuiTypography?.defaultProps?.variantMapping as
    | Record<string, string>
    | undefined;
  expect(mapping?.d1).toBe("h1");
});
