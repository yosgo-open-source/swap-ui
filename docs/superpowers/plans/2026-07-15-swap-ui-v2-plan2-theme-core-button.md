# swap-ui v2 計劃二：Theme 核心 + Button 示範元件 實作計劃

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 建立 SWAP 品牌 theme 核心（design tokens、自訂斷點、`createSwapTheme`、型別 augmentation、`SWAPThemeProvider`、自托管字體），並以 Button 六 variant × 三 size × 全狀態作為第一個「看得見」的示範元件，全部由 theme 驅動、產品端直接用 `@mui/material/Button`。

**Architecture:** theme-first——品牌樣式全部住在 `createSwapTheme()` 回傳的 MUI theme 裡（palette + `components.MuiButton.styleOverrides.root.variants` + 型別 module augmentation）。swap-ui 不再包裝 Button；`SWAPThemeProvider` 注入 theme + CssBaseline + 字體後，原生 `@mui/material/Button` 自動呈現 SWAP 樣式。tokens 另以具名常數輸出供非 React 使用。

**Tech Stack:** @mui/material 9.2.0、@emotion/react 11.14.0、React 19.2.7、TypeScript 6.0.3、tsup 8.5.1、Vitest 4.1.10、Storybook 10.5.0、@fontsource/m-plus-rounded-1c 5.2.10、@fontsource/noto-sans-tc 5.2.9。

## Global Constraints

- **commit 前一律停下，請使用者在 VS Code review，核准後才 commit**（固定約定；本計劃所有「Commit」步驟都隱含這條）。
- **版本號一律查證**：新增套件先 `npm view <pkg> version`，預設裝最新版；勿憑記憶寫版本。
- 在 `v2` 分支上作業（計劃一已建立並推上 origin）。
- 元件去向以 `docs/superpowers/audit/2026-07-14-component-disposition.md` 為準。本計劃只做 theme 核心 + Button，其餘 THEME 元件屬計劃三。
- **token 數值一字不改**：色階、圓角、陰影全部沿用 v1（來源 `legacy/v1-src/SWAPTheme/SWAPTheme.tsx`），僅換掛載方式。
- **自訂斷點值**（來源 `legacy/v1-src/utils/useBreakpoints.ts`）：xxs 0 / xs 375 / sm 576 / md 768 / lg 992 / xl 1200 / xxl 1400，必須寫入 theme.breakpoints.values。
- Button 樣式來源：`legacy/v1-src/Button/Button.tsx`（完整 variant 矩陣）。v9 Button 原生 `loading` prop 取代 v1 雙 CircularProgress 疊加。
- v1 Button 的 `width` / `minWidth` prop **不保留**（純 MUI Button 無此 prop）；產品端改用 `sx={{ width, minWidth }}`，記入遷移指南（計劃四）。此為已同意的小幅 breaking change。
- 每個 Task 的 commit 前跑 `npm run typecheck && npm test` 必須綠。

---

### Task 1: Design tokens 模組

**Files:**
- Create: `src/theme/tokens.ts`
- Test: `src/theme/tokens.test.ts`

**Interfaces:**
- Consumes: 無
- Produces:
  - `swapColors: { primary: Record<Primary,string>, secondary, danger, success, black }`（見下方 Step 3 完整鍵值）
  - `swapRadius: { s:"4px", m:"8px", l:"12px", xl:"20px" }`
  - `swapShadows: { s,m,l,xl: string }`
  - `swapBreakpoints: { xxs:0, xs:375, sm:576, md:768, lg:992, xl:1200, xxl:1400 }`
  - `swapFontFamily: string`
  - `type SwapColors = typeof swapColors`

- [ ] **Step 1: 寫失敗測試 `src/theme/tokens.test.ts`**

```ts
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
```

- [ ] **Step 2: 執行測試確認失敗**

Run: `npx vitest run src/theme/tokens.test.ts`
Expected: FAIL（`Cannot find module './tokens'`）

- [ ] **Step 3: 寫 `src/theme/tokens.ts`（數值逐一照抄 v1）**

```ts
export const swapColors = {
  primary: {
    primary50: "#E6E9F8",
    primary100: "#C1C7ED",
    primary200: "#97A3E1",
    primary300: "#6C7FD5",
    primary400: "#4862CC",
    primary500: "#1747C2",
    primary600: "#0F3FB8",
    primary700: "#0035AC",
    primary800: "#1F3C8E",
    primary900: "#002BA1",
    primaryA11y: "#071E60",
  },
  secondary: {
    secondary50: "#FEF8E3",
    secondary100: "#FCECB7",
    secondary200: "#FBDF8A",
    secondary300: "#FAD45C",
    secondary400: "#F9C93F",
    secondary500: "#F8C131",
    secondary600: "#F7B52C",
    secondary700: "#F6A128",
    secondary800: "#F59225",
    secondary900: "#F27521",
    secondaryA11y: "#E5640C",
  },
  danger: {
    danger50: "#FFEBED",
    danger100: "#FFCCD0",
    danger200: "#F99894",
    danger300: "#F26E6A",
    danger400: "#FC4A43",
    danger500: "#FF3622",
    danger600: "#F32A23",
    danger700: "#E11C1E",
    danger800: "#D40F14",
    danger900: "#C60003",
    dangerA11y: "#A80003",
  },
  success: {
    success50: "#E6F6E8",
    success100: "#C3E8C6",
    success200: "#9BD9A1",
    success300: "#70CB7A",
    success400: "#4CC05D",
    success500: "#1EB43F",
    success600: "#10A535",
    success700: "#00932A",
    success800: "#00821E",
    success900: "#006305",
    successA11y: "#015C16",
  },
  black: {
    white: "#FFFFFF",
    black100: "#F9F9F9",
    black200: "#F6F6F6",
    black300: "#F2F2F2",
    black400: "#ECECEC",
    black500: "#CCCCCC",
    black600: "#909090",
    black700: "#6F6F6F",
    black800: "#4B4B4B",
    black900: "#2D2D2D",
    black1000: "#000000",
  },
} as const;

export const swapRadius = {
  s: "4px",
  m: "8px",
  l: "12px",
  xl: "20px",
} as const;

export const swapShadows = {
  s: "0px 2px 4px rgba(0, 0, 0, 0.12)",
  m: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  l: "0px 6px 24px rgba(0, 0, 0, 0.1)",
  xl: "0px 8px 40px rgba(0, 0, 0, 0.12)",
} as const;

export const swapBreakpoints = {
  xxs: 0,
  xs: 375,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400,
} as const;

// @fontsource 的 font-family 名稱（含空格），與 v1 的 "MPLUSRounded1c" 不同
export const swapFontFamily = ['"M PLUS Rounded 1c"', '"Noto Sans TC"', "sans-serif"].join(", ");

export type SwapColors = typeof swapColors;
```

- [ ] **Step 4: 執行測試確認通過**

Run: `npx vitest run src/theme/tokens.test.ts`
Expected: 3 passed

- [ ] **Step 5: Commit**（先請使用者 review）

```bash
git add src/theme/tokens.ts src/theme/tokens.test.ts
git commit -m "feat(theme): design tokens 具名常數（色階/圓角/陰影/斷點，數值沿用 v1）"
```

---

### Task 2: 型別 module augmentation

**Files:**
- Create: `src/theme/augmentation.ts`
- Test: `src/theme/augmentation.test.ts`

**Interfaces:**
- Consumes: `SwapColors`（Task 1）
- Produces: 對 `@mui/material/styles` 與 `@mui/material/Button` 的型別擴充——
  - `Palette.swap` / `PaletteOptions.swap`: `SwapColors`
  - `BreakpointOverrides`: 新增 `xxs`、`xxl`
  - `ButtonPropsVariantOverrides`: 新增 `primary`、`secondary`、`tertiary`、`black`、`danger`（`text` 為 MUI 內建，不需加）
  - 此檔僅含 `declare module`，無 runtime 輸出；由 `createSwapTheme` 於 Task 3 `import "./augmentation"` 帶入，確保型別生效且被 tsup 打包進 d.ts。

- [ ] **Step 1: 寫測試 `src/theme/augmentation.test.ts`（型別測試——編譯過即通過）**

```ts
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
```

- [ ] **Step 2: 執行確認失敗**

Run: `npm run typecheck`
Expected: FAIL（`'swap' does not exist in type 'PaletteOptions'` 等型別錯誤）

- [ ] **Step 3: 寫 `src/theme/augmentation.ts`**

```ts
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
```

- [ ] **Step 4: 執行確認通過**

Run: `npm run typecheck && npx vitest run src/theme/augmentation.test.ts`
Expected: typecheck 無錯；1 passed

- [ ] **Step 5: Commit**（先請使用者 review）

```bash
git add src/theme/augmentation.ts src/theme/augmentation.test.ts
git commit -m "feat(theme): 型別 augmentation（swap palette / xxs+xxl 斷點 / Button 六 variant）"
```

---

### Task 3: createSwapTheme 基礎（不含 Button）

**Files:**
- Create: `src/theme/createSwapTheme.ts`
- Test: `src/theme/createSwapTheme.test.ts`

**Interfaces:**
- Consumes: `swapColors`、`swapRadius`、`swapShadows`、`swapBreakpoints`、`swapFontFamily`（Task 1）；`./augmentation`（Task 2）
- Produces: `createSwapTheme(options?: ThemeOptions): Theme`——回傳掛好品牌 palette / breakpoints / shape / shadows / typography / cssVariables 與元件 overrides（MuiCard、MuiPaper、MuiOutlinedInput、MuiFormHelperText、MuiIconButton；Button 於 Task 5 補上）的 MUI theme。`options` 淺層合併覆蓋預設。

- [ ] **Step 1: 寫測試 `src/theme/createSwapTheme.test.ts`**

```ts
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
  expect(t.cssVariables).toBeTruthy();
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
```

- [ ] **Step 2: 執行確認失敗**

Run: `npx vitest run src/theme/createSwapTheme.test.ts`
Expected: FAIL（`Cannot find module './createSwapTheme'`）

- [ ] **Step 3: 寫 `src/theme/createSwapTheme.ts`**

```ts
import { createTheme, type Theme, type ThemeOptions } from "@mui/material/styles";
import "./augmentation";
import { swapColors, swapRadius, swapShadows, swapBreakpoints, swapFontFamily } from "./tokens";

const c = swapColors;

export function createSwapTheme(options?: ThemeOptions): Theme {
  return createTheme(
    {
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
    },
    options ?? {},
  );
}
```

- [ ] **Step 4: 執行確認通過**

Run: `npm run typecheck && npx vitest run src/theme/createSwapTheme.test.ts`
Expected: typecheck 無錯；5 passed

- [ ] **Step 5: Commit**（先請使用者 review）

```bash
git add src/theme/createSwapTheme.ts src/theme/createSwapTheme.test.ts
git commit -m "feat(theme): createSwapTheme 基礎（palette/斷點/shape/字體/cssVariables/元件 overrides）"
```

---

### Task 4: SWAPThemeProvider + 字體 + 匯出 + Storybook decorator

**Files:**
- Create: `src/theme/SWAPThemeProvider.tsx`
- Test: `src/theme/SWAPThemeProvider.test.tsx`
- Rewrite: `src/index.ts`
- Modify: `.storybook/preview.tsx`
- Modify: `package.json`（`@fontsource/*` 由 devDependencies 移到 dependencies）
- Delete: `src/smoke.stories.tsx`、`src/smoke.test.tsx`（由 theme smoke 取代）

**Interfaces:**
- Consumes: `createSwapTheme`（Task 3）
- Produces:
  - `SWAPThemeProvider: React.FC<{ theme?: Theme; children?: React.ReactNode }>`——注入 theme（預設 `createSwapTheme()`）+ `<CssBaseline />` + 自托管字體，供 app 最外層包一層。
  - `src/index.ts` 匯出：`SWAPThemeProvider`、`createSwapTheme`、`swapColors`、`swapRadius`、`swapShadows`、`swapBreakpoints`、`swapFontFamily`、`SWAP_UI_VERSION`、`type SwapColors`。
  - Storybook 全域 decorator 以 `SWAPThemeProvider` 包住所有 story。

- [ ] **Step 1: 確認字體套件已安裝並移到 dependencies**

```bash
npm ls @fontsource/m-plus-rounded-1c @fontsource/noto-sans-tc 2>&1 | grep fontsource
```

Expected: 兩者皆 5.x 已安裝（計劃一 Task 5 已裝於 devDependencies）。手動編輯 `package.json`：把 `@fontsource/m-plus-rounded-1c` 與 `@fontsource/noto-sans-tc` 兩行從 `devDependencies` 剪下、貼到新增的 `dependencies` 區塊（版本號不變）。存檔後 `npm install` 確認 lockfile 同步。

- [ ] **Step 2: 寫測試 `src/theme/SWAPThemeProvider.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import Button from "@mui/material/Button";
import { SWAPThemeProvider } from "./SWAPThemeProvider";

test("Provider 渲染 children", () => {
  render(
    <SWAPThemeProvider>
      <Button>hello</Button>
    </SWAPThemeProvider>,
  );
  expect(screen.getByRole("button", { name: "hello" })).toBeInTheDocument();
});
```

- [ ] **Step 3: 執行確認失敗**

Run: `npx vitest run src/theme/SWAPThemeProvider.test.tsx`
Expected: FAIL（`Cannot find module './SWAPThemeProvider'`）

- [ ] **Step 4: 寫 `src/theme/SWAPThemeProvider.tsx`**

```tsx
import * as React from "react";
import { ThemeProvider, type Theme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createSwapTheme } from "./createSwapTheme";

import "@fontsource/m-plus-rounded-1c/400.css";
import "@fontsource/m-plus-rounded-1c/700.css";
import "@fontsource/noto-sans-tc/400.css";
import "@fontsource/noto-sans-tc/700.css";

export interface SWAPThemeProviderProps {
  theme?: Theme;
  children?: React.ReactNode;
}

const defaultTheme = createSwapTheme();

export const SWAPThemeProvider: React.FC<SWAPThemeProviderProps> = ({ theme, children }) => (
  <ThemeProvider theme={theme ?? defaultTheme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
);
```

- [ ] **Step 5: 重寫 `src/index.ts`**

```ts
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

export const SWAP_UI_VERSION = "2.0.0-alpha.0";
```

- [ ] **Step 6: 刪除舊 smoke 檔、改寫 Storybook decorator**

```bash
git rm src/smoke.stories.tsx src/smoke.test.tsx
```

`.storybook/preview.tsx` 加入全域 decorator（保留既有 parameters）：

```tsx
import type { Preview } from "@storybook/react-vite";
import * as React from "react";
import { SWAPThemeProvider } from "../src/theme/SWAPThemeProvider";

const preview: Preview = {
  parameters: {
    controls: { matchers: { color: /(background|color)$/i, date: /Date$/i } },
    a11y: { test: "todo" },
  },
  decorators: [
    (Story) => (
      <SWAPThemeProvider>
        <Story />
      </SWAPThemeProvider>
    ),
  ],
};

export default preview;
```

- [ ] **Step 7: 執行全鏈驗證**

Run: `npm run typecheck && npm test && npm run build && npm run storybook:build`
Expected: typecheck 無錯；測試全綠（tokens 3 + augmentation 1 + createSwapTheme 5 + provider 1）；build 產出 `build/index.js|cjs|d.ts`；storybook build 成功。

- [ ] **Step 8: Commit**（先請使用者 review）

```bash
git add src/theme/SWAPThemeProvider.tsx src/theme/SWAPThemeProvider.test.tsx src/index.ts .storybook/preview.tsx package.json package-lock.json
git commit -m "feat(theme): SWAPThemeProvider + 自托管字體 + 匯出 + Storybook 全域 theme decorator"
```

---

### Task 5: Button — theme 驅動的六 variant × 三 size × 全狀態

**Files:**
- Modify: `src/theme/createSwapTheme.ts`（在 `components` 加入 `MuiButton`）
- Create: `src/theme/button.styles.ts`（Button variant 樣式表，與 createSwapTheme 分離以維持檔案聚焦）
- Test: `src/theme/button.styles.test.ts`
- Create: `src/components/Button.stories.tsx`

**Interfaces:**
- Consumes: `swapColors`（Task 1）、`ButtonPropsVariantOverrides` augmentation（Task 2）、`createSwapTheme`（Task 3）
- Produces:
  - `buttonRootStyles: object`（root slot 共通樣式）
  - `buttonVariants: Array<{ props, style }>`（餵給 `components.MuiButton.styleOverrides.root.variants`）
  - `createSwapTheme` 的 theme 帶有 `components.MuiButton`。
  - Storybook `Components/Button` 頁：六 variant × 三 size × 狀態（含 loading、disabled）。

樣式來源對照（`legacy/v1-src/Button/Button.tsx`）——每個 variant 的色彩矩陣：

| variant | 文字色 | 底色 | 邊框 | hover 底 | active 底 | focus-visible 陰影 |
|---|---|---|---|---|---|---|
| primary | white | primary400 | primary600 | primary300 | primary500 | #D7DFF8 |
| secondary | primary400 | white | primary400 | primary50 | primary100 | #D7DFF8 |
| tertiary | black800 | black400 | 無 | black500 | black600 | rgba(0,0,0,0.1) |
| text | primary400 | white | 無 | primary50 | primary100 | #D7DFF8 |
| black | black800 | white | 無 | black400 | black500 | #CCCCCC |
| danger | white | danger800 | dangerA11y | danger600 | danger900 | #FFCCD0 |

size：small 40px高/`12px 16px`/14px字；medium 48px/`15px 24px`/16px；large 56px/`19px 32px`/16px。共通：`borderRadius 8px`、`fontWeight 700`、`lineHeight 1.125`、`textTransform "unset"`。disabled：`opacity 0.4`。

- [ ] **Step 1: 寫測試 `src/theme/button.styles.test.ts`**

```ts
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
    (v) => (v.props as { variant?: string; size?: string }).variant === "primary" &&
           !(v.props as { size?: string }).size,
  );
  expect((primary?.style as { backgroundColor?: string })?.backgroundColor).toBe("#4862CC");
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
```

- [ ] **Step 2: 執行確認失敗**

Run: `npx vitest run src/theme/button.styles.test.ts`
Expected: FAIL（`Cannot find module './button.styles'`）

- [ ] **Step 3: 寫 `src/theme/button.styles.ts`**

```ts
import { swapColors } from "./tokens";

const c = swapColors;

export const buttonRootStyles = {
  textTransform: "unset" as const,
  borderRadius: "8px",
  fontWeight: 700,
  lineHeight: 1.125,
};

// 每個 variant 一組色彩；狀態（hover/active/focus-visible/disabled）以巢狀選擇器表達
const variantColor = [
  {
    variant: "primary",
    color: c.black.white,
    backgroundColor: c.primary.primary400,
    border: `1px solid ${c.primary.primary600}`,
    hoverBg: c.primary.primary300,
    activeBg: c.primary.primary500,
    focusShadow: "0px 0px 0px 4px #D7DFF8",
  },
  {
    variant: "secondary",
    color: c.primary.primary400,
    backgroundColor: c.black.white,
    border: `1px solid ${c.primary.primary400}`,
    hoverBg: c.primary.primary50,
    activeBg: c.primary.primary100,
    focusShadow: "0px 0px 0px 4px #D7DFF8",
  },
  {
    variant: "tertiary",
    color: c.black.black800,
    backgroundColor: c.black.black400,
    border: "none",
    hoverBg: c.black.black500,
    activeBg: c.black.black600,
    focusShadow: "0px 0px 0px 4px rgba(0, 0, 0, 0.1)",
  },
  {
    variant: "text",
    color: c.primary.primary400,
    backgroundColor: c.black.white,
    border: "none",
    hoverBg: c.primary.primary50,
    activeBg: c.primary.primary100,
    focusShadow: "0px 0px 0px 4px #D7DFF8",
  },
  {
    variant: "black",
    color: c.black.black800,
    backgroundColor: c.black.white,
    border: "none",
    hoverBg: c.black.black400,
    activeBg: c.black.black500,
    focusShadow: "0px 0px 0px 4px #CCCCCC",
  },
  {
    variant: "danger",
    color: c.black.white,
    backgroundColor: c.danger.danger800,
    border: `1px solid ${c.danger.dangerA11y}`,
    hoverBg: c.danger.danger600,
    activeBg: c.danger.danger900,
    focusShadow: "0px 0px 0px 4px #FFCCD0",
  },
] as const;

const sizeStyle = [
  { size: "small", height: "40px", padding: "12px 16px", fontSize: 14 },
  { size: "medium", height: "48px", padding: "15px 24px", fontSize: 16 },
  { size: "large", height: "56px", padding: "19px 32px", fontSize: 16 },
] as const;

export const buttonVariants = [
  ...variantColor.map((v) => ({
    props: { variant: v.variant },
    style: {
      color: v.color,
      backgroundColor: v.backgroundColor,
      border: v.border,
      "&:hover": { backgroundColor: v.hoverBg },
      "&:active": { backgroundColor: v.activeBg },
      "&:focus-visible": { boxShadow: v.focusShadow },
      "&:disabled": { opacity: 0.4, color: v.color, backgroundColor: v.backgroundColor },
    },
  })),
  ...sizeStyle.map((s) => ({
    props: { size: s.size },
    style: { height: s.height, padding: s.padding, fontSize: s.fontSize },
  })),
];
```

- [ ] **Step 4: 在 `createSwapTheme.ts` 掛上 MuiButton**

在 `import` 區塊加：

```ts
import { buttonRootStyles, buttonVariants } from "./button.styles";
```

在 `components` 物件內（`MuiCard` 前）加入：

```ts
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
```

- [ ] **Step 5: 執行確認通過**

Run: `npm run typecheck && npx vitest run src/theme/button.styles.test.ts`
Expected: typecheck 無錯；5 passed

- [ ] **Step 6: 寫 `src/components/Button.stories.tsx`**

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const VARIANTS = ["primary", "secondary", "tertiary", "text", "black", "danger"] as const;
const SIZES = ["small", "medium", "large"] as const;

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
};
export default meta;
type Story = StoryObj<typeof Button>;

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      {VARIANTS.map((v) => (
        <Button key={v} variant={v}>
          {v}
        </Button>
      ))}
    </Stack>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} alignItems="center">
      {SIZES.map((s) => (
        <Button key={s} variant="primary" size={s}>
          {s}
        </Button>
      ))}
    </Stack>
  ),
};

export const States: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Button variant="primary">normal</Button>
      <Button variant="primary" disabled>
        disabled
      </Button>
      <Button variant="primary" loading>
        loading
      </Button>
    </Stack>
  ),
};

export const Playground: Story = {
  args: { variant: "primary", size: "medium", children: "Button" },
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
  },
};
```

- [ ] **Step 7: 目視驗證 Storybook + 與 v1 基準比對**

```bash
npm run storybook
```

開 http://localhost:6006 → `Components/Button`。逐一核對：六 variant 顏色、三 size 高度、disabled 半透明、loading 轉圈，對照 `docs/superpowers/baseline/v1-screenshots/button--*.png`（品牌觀感一致即可，不求像素）。確認無 console 錯誤後 Ctrl+C。

- [ ] **Step 8: Commit**（先請使用者 review——這是第一個看得見的新版元件）

```bash
git add src/theme/button.styles.ts src/theme/button.styles.test.ts src/theme/createSwapTheme.ts src/components/Button.stories.tsx
git commit -m "feat(theme): Button 六 variant × 三 size × 全狀態（theme 驅動，樣式沿用 v1）"
```

---

### Task 6: 補裝 addon-vitest + Button 互動測試

**Files:**
- Modify: `package.json`（新增 addon-vitest 相關 devDeps 與可能的 `overrides`）
- Modify: `.storybook/main.ts`（addons 加回 `@storybook/addon-vitest`）
- Modify: `vitest.config.ts`（加入 storybook 瀏覽器測試 project）
- Modify: `src/components/Button.stories.tsx`（加 `play` 互動測試）

**Interfaces:**
- Consumes: Task 5 的 Button stories
- Produces: `npm test` 除 jsdom 單元測試外，另跑 Storybook story 的瀏覽器互動測試；CI 一併守回歸。使用者要求的第二層測試（見設計文件 §5、記憶 [[swap-ui-testing-strategy]]）。

- [ ] **Step 1: 安裝 addon-vitest 與瀏覽器測試相依（查證最新版）**

```bash
npm view @storybook/addon-vitest version
npm i -D @storybook/addon-vitest @vitest/browser-playwright @vitest/coverage-v8
npx playwright install chromium
```

- [ ] **Step 2: 加回 addon 與 vitest project**

`.storybook/main.ts` 的 `addons` 陣列加入 `"@storybook/addon-vitest"`（置於 a11y 之前）。

`vitest.config.ts` 改為雙 project（保留既有 jsdom 設定，新增 storybook browser project）：

```ts
import { defineConfig } from "vitest/config";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin";
import { playwright } from "@vitest/browser-playwright";

const dirname = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  test: {
    projects: [
      {
        extends: true,
        test: {
          name: "unit",
          environment: "jsdom",
          globals: true,
          setupFiles: ["./vitest.setup.ts"],
          include: ["src/**/*.test.{ts,tsx}"],
        },
      },
      {
        extends: true,
        plugins: [storybookTest({ configDir: path.join(dirname, ".storybook") })],
        test: {
          name: "storybook",
          browser: {
            enabled: true,
            headless: true,
            provider: playwright({}),
            instances: [{ browser: "chromium" }],
          },
        },
      },
    ],
  },
});
```

- [ ] **Step 3: 執行，若遇 aria-query 相依 bug 則以 overrides 釘版本**

Run: `npm test`
Expected（順利時）：unit project 全綠 + storybook project 跑 Button stories 綠。

若出現 `aria-query ... does not provide an export named 'elementRoles'`（計劃一遇過的相依 bug）：查證可用版本 `npm view aria-query versions --json`，在 `package.json` 加：

```json
  "overrides": {
    "aria-query": "5.3.0"
  }
```

然後 `rm -rf node_modules package-lock.json && npm install && npm test`，確認錯誤消失。將採用的 aria-query 版本與原因記入本 Task commit 訊息。

- [ ] **Step 4: 加 Button 互動測試（play 函式）**

在 `src/components/Button.stories.tsx` 頂部 import：

```tsx
import { expect, fn, userEvent, within } from "storybook/test";
```

將 `Playground` story 改為帶 `play`：

```tsx
export const Playground: Story = {
  args: { variant: "primary", size: "medium", children: "Button", onClick: fn() },
  argTypes: {
    variant: { control: "select", options: VARIANTS },
    size: { control: "select", options: SIZES },
  },
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button", { name: "Button" });
    await userEvent.click(button);
    await expect(args.onClick).toHaveBeenCalledOnce();
  },
};
```

註：`storybook/test` 的匯出路徑以 Storybook 10 實際套件為準（若 init 產生的既有 stories 用不同路徑，跟隨之）。

- [ ] **Step 5: 執行全鏈驗證**

Run: `npm run typecheck && npm test && npm run build && npm run storybook:build`
Expected: typecheck 無錯；unit + storybook 兩 project 全綠（Button Playground 的 click 斷言通過）；build 與 storybook build 成功。

- [ ] **Step 6: Commit**（先請使用者 review）

```bash
git add package.json package-lock.json .storybook/main.ts vitest.config.ts src/components/Button.stories.tsx
git commit -m "test: 補裝 addon-vitest（瀏覽器互動測試）+ Button click play 測試"
```

---

### Task 7: Chrome MCP 互動驗收 + push

**Files:** 無（驗收與整合）

**Interfaces:**
- Consumes: Task 5、6 的 Button stories 與測試鏈
- Produces: 驗收紀錄 + `v2` 分支推上 origin、CI 綠燈。

- [ ] **Step 1: 起 v2 Storybook 供 Chrome MCP 驗收**

```bash
npm run storybook
```

- [ ] **Step 2: Chrome MCP 互動驗收（設計文件 §8.5）**

以 Chrome MCP 開 http://localhost:6006 `Components/Button`：
- 逐一切換 Playground 的 variant / size control，確認即時反映
- 點擊 button 確認可互動、無 console 錯誤（read_console_messages）
- 需要新舊比對時，另 worktree 起 v1（`docs/superpowers/baseline/README.md` 方法，:6106）並排比對體驗
記錄結果（截圖或文字）。確認後 Ctrl+C。

- [ ] **Step 3: push 並確認 CI**

```bash
git push origin v2
```

以 GitHub API 確認 CI 綠燈：

```bash
curl -s "https://api.github.com/repos/yosgo-open-source/swap-ui/actions/runs?branch=v2&per_page=1" | \
  python3 -c "import json,sys; r=json.load(sys.stdin)['workflow_runs'][0]; print(r['status'], r.get('conclusion'), r['html_url'])"
```

Expected: `completed success ...`

---

## 計劃完成的定義

- `createSwapTheme()` 產出掛好品牌 palette / 自訂斷點 / 元件 overrides / Button 六 variant 的 MUI theme。
- `SWAPThemeProvider` 注入 theme + 自托管字體；產品端包一層即可用原生 `@mui/material/Button` 得到 SWAP 樣式。
- design tokens 具名輸出且進入型別系統（`Palette.swap`、Button variant、xxs/xxl 斷點）。
- 兩層測試綠：jsdom 單元 + addon-vitest 瀏覽器互動；`npm run typecheck / test / build / storybook:build` 全綠，CI 綠燈。
- Button 在 Storybook 可視、經 Chrome MCP 互動驗收、與 v1 基準觀感一致——**第一個看得見的新版元件**。
- 下一步：依審計表撰寫計劃三（其餘 THEME 元件：Typography、輸入類、導覽類、回饋類…）。
