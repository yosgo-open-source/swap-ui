import { buttonVariants, buttonRootStyles } from "./button.styles";
import { createSwapTheme } from "./createSwapTheme";

test("root 共通樣式", () => {
  expect(buttonRootStyles.textTransform).toBe("unset");
  expect(buttonRootStyles.borderRadius).toBe("8px");
  expect(buttonRootStyles.fontWeight).toBe(700);
});

test("六 variant 各有一條 primary-color 規則", () => {
  const names = buttonVariants
    .map((v) => (v.props as { variant?: string }).variant)
    .filter(Boolean);
  for (const n of ["primary", "secondary", "tertiary", "text", "black", "danger"]) {
    expect(names).toContain(n);
  }
});

test("primary variant 底色為 primary400", () => {
  const primary = buttonVariants.find(
    (v) =>
      (v.props as { variant?: string; size?: string }).variant === "primary" &&
      !(v.props as { size?: string }).size,
  );
  expect((primary?.style as { backgroundColor?: string })?.backgroundColor).toBe("#4862CC");
});

test("每個 variant 為 loading spinner 設可見顏色（非 MUI 預設隱形灰）", () => {
  const colored = buttonVariants.filter(
    (v) => (v.props as { variant?: string }).variant,
  );
  for (const v of colored) {
    const indicator = (v.style as Record<string, { color?: string }>)[
      "& .MuiButton-loadingIndicator"
    ];
    expect(indicator?.color).toBeTruthy();
    expect(indicator?.color).not.toBe("rgba(0, 0, 0, 0.26)");
  }
});

test("三 size 各有 height 規則", () => {
  const heights = buttonVariants
    .filter((v) => (v.props as { size?: string }).size)
    .map((v) => (v.style as { height?: string }).height);
  expect(heights).toEqual(expect.arrayContaining(["40px", "48px", "56px"]));
});

test("theme 帶有 MuiButton overrides", () => {
  const t = createSwapTheme();
  const root = t.components?.MuiButton?.styleOverrides?.root as { variants?: unknown[] };
  expect(Array.isArray(root.variants)).toBe(true);
});
