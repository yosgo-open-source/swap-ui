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
    const indicator = (v.style as unknown as Record<string, { color?: string }>)[
      "& .MuiButton-loadingIndicator"
    ];
    expect(indicator?.color).toBeTruthy();
    expect(indicator?.color).not.toBe("rgba(0, 0, 0, 0.26)");
  }
});

// disabled 改明確配色（不再整顆 opacity 0.4——會把文案對比稀釋到 ~2:1）
test("每個 variant 的 disabled 有明確底色，且文字色只在非 loading 時指定", () => {
  const colored = buttonVariants.filter((v) => (v.props as { variant?: string }).variant);
  for (const v of colored) {
    const style = v.style as unknown as Record<string, Record<string, unknown>>;
    // 不得回到 opacity 方案
    expect(style["&:disabled"]).not.toHaveProperty("opacity");
    expect(style["&:disabled"].backgroundColor).toBeTruthy();
    // color 若直接寫在 &:disabled 會蓋掉 MUI loading 隱藏 label 的機制（歷史 bug），必須放在 :not(.MuiButton-loading)
    expect(style["&:disabled"]).not.toHaveProperty("color");
    expect(style["&:disabled:not(.MuiButton-loading)"].color).toBeTruthy();
    // spinner 維持 variant 色系（與灰字脫鉤），仍不得是 MUI 預設隱形灰
    expect(style["& .MuiButton-loadingIndicator"].color).toBeTruthy();
    // hover/active 必須以 :not(:disabled) 守衛——pointer-events 開回 auto 後停用鈕會收到 hover
    expect(style).toHaveProperty("&:hover:not(:disabled)");
    expect(style).not.toHaveProperty("&:hover");
  }
});

test("disabled/loading 顯示 not-allowed 游標（pointer-events 需開回 auto 才生效）", () => {
  const dis = (buttonRootStyles as unknown as Record<string, Record<string, unknown>>)[
    "&.Mui-disabled"
  ];
  expect(dis.cursor).toBe("not-allowed");
  expect(dis.pointerEvents).toBe("auto");
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
