# swap-ui v2 計劃三：Typography 實作計劃

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 將 v1 Typography（32 個字級 variant + 60+ 色 token 的 color prop + dark mode）遷移到 MUI v9：字級型階下沉為 theme typography variants，color/mode 語意由一個薄 `Typography` wrapper 保留，對外 API 與 v1 一致。

**Architecture:** 混合式——**字級型階**（fontSize/fontWeight/lineHeight）是乾淨的 theme 資料，下沉為 `theme.typography.<variant>` + `variantMapping` + 型別 augmentation，任何元件都能引用。**color prop 語意與 MUI 衝突**（SWAP `color="primary"` 是黑色文字、非品牌藍；且隨 mode 變色），無法用 MUI 的 color prop 表達，故 swap-ui 保留一個薄 `Typography` wrapper：吃 v1 的 `variant/color/mode` props，用 theme 的 variant + 一個 color resolver 算出文字色。產品端維持 `import { Typography } from "@yosgo/swap-ui"`，寫法不變。

**Tech Stack:** @mui/material 9.2.0、@emotion、React 19.2、TypeScript 6.0.3、Vitest 4.1.10、Storybook 10.5.0。

## Global Constraints

- **commit 前一律停下，請使用者在 VS Code review，核准後才 commit**（固定約定）。
- **版本號一律查證**（`npm view`）；預設最新版。
- 在 `v2` 分支作業。
- **數值一字不改**：字級/字重/行高/色階全部沿用 v1（來源 `legacy/v1-src/Typography/Typography.tsx`）。
- 沿用計劃二既有基礎：`swapColors`（tokens.ts）、`createSwapTheme`、`augmentation.ts`、`SWAPThemeProvider`、button.styles 的模式。
- **測試兩層**：jsdom 單元（Vitest+RTL）+ addon-vitest 瀏覽器 story 測試。改 `.storybook`/config 後需重啟 storybook dev（勿靠 HMR）。
- 每個 Task 的 commit 前 `npm run typecheck && npm test` 必須綠。

### v1 Typography 規格（實作依據，來源 legacy/v1-src/Typography/Typography.tsx）

**32 個 variant**：`d1 d2 d3 d4`、`h1 h2 h3 h4 h5 h6`、`title subtitle body1 body2 caption1 caption2 small1 small2 tiny1 tiny2`（各有對應 `_loose` 版）、`button_l button_s`。

fontSize：d1 4.5rem / d2 4rem / d3 3.5rem / d4 3rem / h1 2.5rem / h2 2rem / h3 1.75rem / h4 1.5rem / h5 1.25rem / h6 1.125rem / title(+_loose) 1rem / subtitle(+_loose) 0.875rem / body1(+_loose) 1rem / body2(+_loose) 0.875rem / caption1(+_loose) 0.75rem / caption2(+_loose) 0.75rem / small1(+_loose) 0.6875rem / small2(+_loose) 0.6875rem / tiny1(+_loose) 0.625rem / tiny2(+_loose) 0.625rem / button_l 1rem / button_s 0.875rem。

fontWeight **700**：d1–d4、h1–h6、title(+_loose)、subtitle(+_loose)、caption1(+_loose)、small1(+_loose)、tiny1(+_loose)、button_l、button_s。
fontWeight **400**：body1(+_loose)、body2(+_loose)、caption2(+_loose)、small2(+_loose)、tiny2(+_loose)。

lineHeight：**1.25** → d1 d2 d3 h1 h2 h3；**1.4** → d4 h4 h5 h6 及所有非 `_loose` 的 text variant（title subtitle body1 body2 caption1 caption2 small1 small2 tiny1 tiny2）；**1.6** → 所有 `_loose` variant；**1.125** → button_l button_s。letterSpacing 一律 `0em`。

**color prop**（light / dark 語意）：語意名 `primary/secondary/tertiary` 隨 mode 變；token 名（primary50…、secondary…、danger…、success…、white、black100…black1000）不隨 mode 變。
- light：primary→black1000、secondary→black800、tertiary→black700、token→該 token 值、預設→black1000
- dark：primary→white、secondary→black500、tertiary→black600、token→該 token 值、預設→black1000

---

### Task 1: Typography 型階變數（type scale）

**Files:**
- Create: `src/theme/typography.styles.ts`
- Test: `src/theme/typography.styles.test.ts`

**Interfaces:**
- Consumes: 無
- Produces:
  - `SWAP_TYPOGRAPHY_VARIANTS: readonly string[]`（32 個 variant 名，供 story / augmentation 對照）
  - `swapTypographyVariants: Record<string, { fontSize: string; fontWeight: number; lineHeight: number; letterSpacing: string }>`
  - `swapTypographyVariantMapping: Record<string, string>`（variant → HTML 標籤）

- [ ] **Step 1: 寫失敗測試 `src/theme/typography.styles.test.ts`**

```ts
import {
  swapTypographyVariants,
  SWAP_TYPOGRAPHY_VARIANTS,
  swapTypographyVariantMapping,
} from "./typography.styles";

test("涵蓋 32 個 variant", () => {
  expect(SWAP_TYPOGRAPHY_VARIANTS).toHaveLength(32);
  for (const v of SWAP_TYPOGRAPHY_VARIANTS) {
    expect(swapTypographyVariants[v]).toBeDefined();
  }
});

test("關鍵 variant 的字級/字重/行高與 v1 一致", () => {
  expect(swapTypographyVariants.d1).toMatchObject({
    fontSize: "4.5rem",
    fontWeight: 700,
    lineHeight: 1.25,
  });
  expect(swapTypographyVariants.body1).toMatchObject({
    fontSize: "1rem",
    fontWeight: 400,
    lineHeight: 1.4,
  });
  expect(swapTypographyVariants.tiny2_loose).toMatchObject({
    fontSize: "0.625rem",
    fontWeight: 400,
    lineHeight: 1.6,
  });
  expect(swapTypographyVariants.button_l).toMatchObject({
    fontSize: "1rem",
    fontWeight: 700,
    lineHeight: 1.125,
  });
});

test("每個 variant 都有 letterSpacing 0em", () => {
  for (const v of SWAP_TYPOGRAPHY_VARIANTS) {
    expect(swapTypographyVariants[v].letterSpacing).toBe("0em");
  }
});

test("variantMapping 涵蓋所有 variant", () => {
  for (const v of SWAP_TYPOGRAPHY_VARIANTS) {
    expect(swapTypographyVariantMapping[v]).toBeTruthy();
  }
});
```

- [ ] **Step 2: 執行確認失敗**

Run: `npx vitest run src/theme/typography.styles.test.ts`
Expected: FAIL（`Cannot find module './typography.styles'`）

- [ ] **Step 3: 寫 `src/theme/typography.styles.ts`**

```ts
type VariantStyle = {
  fontSize: string;
  fontWeight: number;
  lineHeight: number;
  letterSpacing: string;
};

// 由「規格表」以程式生成 32 個 variant，避免手抄 32 段
const FONT_SIZE: Record<string, string> = {
  d1: "4.5rem", d2: "4rem", d3: "3.5rem", d4: "3rem",
  h1: "2.5rem", h2: "2rem", h3: "1.75rem", h4: "1.5rem", h5: "1.25rem", h6: "1.125rem",
  title: "1rem", subtitle: "0.875rem",
  body1: "1rem", body2: "0.875rem",
  caption1: "0.75rem", caption2: "0.75rem",
  small1: "0.6875rem", small2: "0.6875rem",
  tiny1: "0.625rem", tiny2: "0.625rem",
  button_l: "1rem", button_s: "0.875rem",
};

// 有 _loose 變體的 base 名（button_l/s 無 _loose）
const LOOSE_BASES = [
  "title", "subtitle", "body1", "body2",
  "caption1", "caption2", "small1", "small2", "tiny1", "tiny2",
];

const WEIGHT_400 = new Set([
  "body1", "body2", "caption2", "small2", "tiny2",
]); // 其餘皆 700

const LH_125 = new Set(["d1", "d2", "d3", "h1", "h2", "h3"]);
const LH_1125 = new Set(["button_l", "button_s"]);

function baseName(variant: string): string {
  return variant.endsWith("_loose") ? variant.slice(0, -"_loose".length) : variant;
}

function weightOf(variant: string): number {
  return WEIGHT_400.has(baseName(variant)) ? 400 : 700;
}

function lineHeightOf(variant: string): number {
  if (variant.endsWith("_loose")) return 1.6;
  if (LH_125.has(variant)) return 1.25;
  if (LH_1125.has(variant)) return 1.125;
  return 1.4;
}

const ALL_VARIANTS: string[] = [
  "d1", "d2", "d3", "d4",
  "h1", "h2", "h3", "h4", "h5", "h6",
  ...Object.keys(FONT_SIZE).filter((k) => !/^d\d|^h\d/.test(k)),
  ...LOOSE_BASES.map((b) => `${b}_loose`),
];

// 去重並固定順序
export const SWAP_TYPOGRAPHY_VARIANTS: readonly string[] = Array.from(new Set(ALL_VARIANTS));

export const swapTypographyVariants: Record<string, VariantStyle> = Object.fromEntries(
  SWAP_TYPOGRAPHY_VARIANTS.map((v) => [
    v,
    {
      fontSize: FONT_SIZE[baseName(v)],
      fontWeight: weightOf(v),
      lineHeight: lineHeightOf(v),
      letterSpacing: "0em",
    },
  ]),
);

// variant → HTML 標籤（display/heading 用語意標籤，其餘用 p/span）
export const swapTypographyVariantMapping: Record<string, string> = Object.fromEntries(
  SWAP_TYPOGRAPHY_VARIANTS.map((v) => {
    if (/^h[1-6]$/.test(v)) return [v, v];
    if (/^d[1-4]$/.test(v)) return [v, "h1"];
    if (v.startsWith("button")) return [v, "span"];
    return [v, "p"];
  }),
);
```

- [ ] **Step 4: 執行確認通過**

Run: `npx vitest run src/theme/typography.styles.test.ts`
Expected: 4 passed（若 `SWAP_TYPOGRAPHY_VARIANTS` 長度非 32，檢查 ALL_VARIANTS 組法）

- [ ] **Step 5: Commit**（先請使用者 review）

```bash
git add src/theme/typography.styles.ts src/theme/typography.styles.test.ts
git commit -m "feat(theme): Typography 型階變數（32 variant 字級/字重/行高，沿用 v1）"
```

---

### Task 2: Typography variant 型別 augmentation

**Files:**
- Modify: `src/theme/augmentation.ts`
- Test: `src/theme/augmentation.test.ts`（新增案例）

**Interfaces:**
- Consumes: 無（型別層）
- Produces: `TypographyVariants` / `TypographyVariantsOptions` 各 32 鍵；`TypographyPropsVariantOverrides` 各 32 `: true`。使 `theme.typography.d1` 與 `<Typography variant="d1">` 通過型別檢查。

- [ ] **Step 1: 在 `augmentation.test.ts` 加型別案例**

於檔尾加：

```ts
import { createTheme as createTheme2 } from "@mui/material/styles";

test("typography 自訂 variant 通過型別檢查", () => {
  const theme = createTheme2({
    typography: { d1: { fontSize: "4.5rem" }, tiny2_loose: { fontSize: "0.625rem" } },
  });
  expect(theme.typography.d1.fontSize).toBe("4.5rem");
});
```

- [ ] **Step 2: 執行確認失敗**

Run: `npm run typecheck`
Expected: FAIL（`'d1' does not exist in type 'TypographyVariantsOptions'`）

- [ ] **Step 3: 在 `augmentation.ts` 加 typography 擴充**

檔頂 import 補（`React.CSSProperties` 需要）：

```ts
import type * as React from "react";
```

型別 augmentation 的介面鍵無法由 runtime 陣列生成，需逐一列出。只需列 **24 個新 variant**——`h1–h6`、`body1`、`body2` 是 MUI 內建 variant，型別已存在，僅在 theme 覆蓋數值（Task 3），不在此重列。

在既有 `declare module "@mui/material/styles"` 區塊內加：

```ts
  interface TypographyVariants {
    d1: React.CSSProperties; d2: React.CSSProperties; d3: React.CSSProperties; d4: React.CSSProperties;
    title: React.CSSProperties; subtitle: React.CSSProperties;
    caption1: React.CSSProperties; caption2: React.CSSProperties;
    small1: React.CSSProperties; small2: React.CSSProperties;
    tiny1: React.CSSProperties; tiny2: React.CSSProperties;
    button_l: React.CSSProperties; button_s: React.CSSProperties;
    title_loose: React.CSSProperties; subtitle_loose: React.CSSProperties;
    body1_loose: React.CSSProperties; body2_loose: React.CSSProperties;
    caption1_loose: React.CSSProperties; caption2_loose: React.CSSProperties;
    small1_loose: React.CSSProperties; small2_loose: React.CSSProperties;
    tiny1_loose: React.CSSProperties; tiny2_loose: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    d1?: React.CSSProperties; d2?: React.CSSProperties; d3?: React.CSSProperties; d4?: React.CSSProperties;
    title?: React.CSSProperties; subtitle?: React.CSSProperties;
    caption1?: React.CSSProperties; caption2?: React.CSSProperties;
    small1?: React.CSSProperties; small2?: React.CSSProperties;
    tiny1?: React.CSSProperties; tiny2?: React.CSSProperties;
    button_l?: React.CSSProperties; button_s?: React.CSSProperties;
    title_loose?: React.CSSProperties; subtitle_loose?: React.CSSProperties;
    body1_loose?: React.CSSProperties; body2_loose?: React.CSSProperties;
    caption1_loose?: React.CSSProperties; caption2_loose?: React.CSSProperties;
    small1_loose?: React.CSSProperties; small2_loose?: React.CSSProperties;
    tiny1_loose?: React.CSSProperties; tiny2_loose?: React.CSSProperties;
  }
```

新增 `declare module "@mui/material/Typography"` 區塊：

```ts
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    d1: true; d2: true; d3: true; d4: true;
    title: true; subtitle: true;
    caption1: true; caption2: true;
    small1: true; small2: true;
    tiny1: true; tiny2: true;
    button_l: true; button_s: true;
    title_loose: true; subtitle_loose: true;
    body1_loose: true; body2_loose: true;
    caption1_loose: true; caption2_loose: true;
    small1_loose: true; small2_loose: true;
    tiny1_loose: true; tiny2_loose: true;
  }
}
```

- [ ] **Step 4: 執行確認通過**

Run: `npm run typecheck && npx vitest run src/theme/augmentation.test.ts`
Expected: typecheck 無錯；augmentation 測試通過

- [ ] **Step 5: Commit**（先請使用者 review）

```bash
git add src/theme/augmentation.ts src/theme/augmentation.test.ts
git commit -m "feat(theme): Typography 自訂 variant 型別 augmentation（24 新 variant）"
```

---

### Task 3: 將 typography variants 併入 createSwapTheme

**Files:**
- Modify: `src/theme/createSwapTheme.ts`
- Test: `src/theme/createSwapTheme.test.ts`（新增案例）

**Interfaces:**
- Consumes: `swapTypographyVariants`、`swapTypographyVariantMapping`（Task 1）
- Produces: theme.typography 帶 32 variant 樣式；`theme.components.MuiTypography.defaultProps.variantMapping` 就位。

- [ ] **Step 1: 在 `createSwapTheme.test.ts` 加案例**

```ts
test("typography variants 併入 theme", () => {
  const t = createSwapTheme();
  expect((t.typography as Record<string, { fontSize?: string }>).d1.fontSize).toBe("4.5rem");
  expect((t.typography as Record<string, { fontWeight?: number }>).button_l.fontWeight).toBe(700);
  const mapping = t.components?.MuiTypography?.defaultProps?.variantMapping as
    | Record<string, string>
    | undefined;
  expect(mapping?.d1).toBe("h1");
});
```

- [ ] **Step 2: 執行確認失敗**

Run: `npx vitest run src/theme/createSwapTheme.test.ts`
Expected: FAIL（`d1` undefined / mapping undefined）

- [ ] **Step 3: 修改 `createSwapTheme.ts`**

import 補：

```ts
import { swapTypographyVariants, swapTypographyVariantMapping } from "./typography.styles";
```

把 `typography` 設定由：

```ts
      typography: { fontFamily: swapFontFamily },
```

改為：

```ts
      typography: { fontFamily: swapFontFamily, ...swapTypographyVariants },
```

在 `components` 內（`MuiButton` 前）加：

```ts
        MuiTypography: {
          defaultProps: { variantMapping: swapTypographyVariantMapping },
        },
```

- [ ] **Step 4: 執行確認通過**

Run: `npm run typecheck && npx vitest run src/theme/createSwapTheme.test.ts`
Expected: typecheck 無錯；createSwapTheme 測試全通過

- [ ] **Step 5: Commit**（先請使用者 review）

```bash
git add src/theme/createSwapTheme.ts src/theme/createSwapTheme.test.ts
git commit -m "feat(theme): 將 32 個 Typography variant 與 variantMapping 併入 theme"
```

---

### Task 4: SWAP 文字色 resolver

**Files:**
- Create: `src/theme/textColor.ts`
- Test: `src/theme/textColor.test.ts`

**Interfaces:**
- Consumes: `swapColors`（tokens.ts）
- Produces: `resolveSwapTextColor(color?: string, mode?: "" | "dark"): string`——實作 v1 的 light/dark 語意；`type SwapTextColor`（可接受的 color 字串聯集）。此 resolver 亦供計劃四的 Link / IconButton 重用。

- [ ] **Step 1: 寫測試 `src/theme/textColor.test.ts`**

```ts
import { resolveSwapTextColor } from "./textColor";

test("語意色隨 mode 變", () => {
  expect(resolveSwapTextColor("primary")).toBe("#000000"); // light: black1000
  expect(resolveSwapTextColor("primary", "dark")).toBe("#FFFFFF"); // dark: white
  expect(resolveSwapTextColor("secondary")).toBe("#4B4B4B"); // black800
  expect(resolveSwapTextColor("secondary", "dark")).toBe("#CCCCCC"); // black500
  expect(resolveSwapTextColor("tertiary")).toBe("#6F6F6F"); // black700
  expect(resolveSwapTextColor("tertiary", "dark")).toBe("#909090"); // black600
});

test("token 名不隨 mode 變", () => {
  expect(resolveSwapTextColor("primary400")).toBe("#4862CC");
  expect(resolveSwapTextColor("primary400", "dark")).toBe("#4862CC");
  expect(resolveSwapTextColor("danger800")).toBe("#D40F14");
  expect(resolveSwapTextColor("white")).toBe("#FFFFFF");
  expect(resolveSwapTextColor("black500")).toBe("#CCCCCC");
});

test("未指定或未知 color 預設 black1000", () => {
  expect(resolveSwapTextColor()).toBe("#000000");
  expect(resolveSwapTextColor("nope")).toBe("#000000");
});
```

- [ ] **Step 2: 執行確認失敗**

Run: `npx vitest run src/theme/textColor.test.ts`
Expected: FAIL（`Cannot find module './textColor'`）

- [ ] **Step 3: 寫 `src/theme/textColor.ts`**

```ts
import { swapColors } from "./tokens";

const c = swapColors;

// 攤平所有色階為單一 token→hex 表（鍵皆唯一：primary50…、secondary…、danger…、success…、white、black100…）
const tokenMap: Record<string, string> = {
  ...c.primary,
  ...c.secondary,
  ...c.danger,
  ...c.success,
  ...c.black,
};

export type SwapTextColor =
  | "primary"
  | "secondary"
  | "tertiary"
  | keyof typeof tokenMap;

export function resolveSwapTextColor(color?: string, mode?: "" | "dark"): string {
  const dark = mode === "dark";
  if (color === "primary") return dark ? c.black.white : c.black.black1000;
  if (color === "secondary") return dark ? c.black.black500 : c.black.black800;
  if (color === "tertiary") return dark ? c.black.black600 : c.black.black700;
  if (color && color in tokenMap) return tokenMap[color];
  return c.black.black1000;
}
```

- [ ] **Step 4: 執行確認通過**

Run: `npx vitest run src/theme/textColor.test.ts`
Expected: 3 passed

- [ ] **Step 5: Commit**（先請使用者 review）

```bash
git add src/theme/textColor.ts src/theme/textColor.test.ts
git commit -m "feat(theme): SWAP 文字色 resolver（60+ token + primary/secondary/tertiary 隨 mode）"
```

---

### Task 5: Typography wrapper 元件

**Files:**
- Create: `src/components/Typography.tsx`
- Test: `src/components/Typography.test.tsx`
- Create: `src/components/Typography.stories.tsx`
- Modify: `src/index.ts`（匯出 Typography）

**Interfaces:**
- Consumes: `resolveSwapTextColor`（Task 4）、theme 的 typography variants（Task 3）
- Produces: `Typography: React.FC<SwapTypographyProps>`——props `{ variant?, color?, mode?, children?, style? }`，對外 API 與 v1 一致；由 swap-ui 匯出。

- [ ] **Step 1: 寫測試 `src/components/Typography.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Typography from "./Typography";

function renderWithTheme(ui: React.ReactElement) {
  return render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);
}

test("渲染文字內容", () => {
  renderWithTheme(<Typography variant="body1">哈囉</Typography>);
  expect(screen.getByText("哈囉")).toBeInTheDocument();
});

test("color 解析為文字色（token 名）", () => {
  renderWithTheme(
    <Typography variant="body1" color="primary400">
      藍字
    </Typography>,
  );
  const el = screen.getByText("藍字");
  expect(el).toHaveStyle({ color: "#4862CC" });
});

test("語意色 primary 在 light 為黑", () => {
  renderWithTheme(
    <Typography variant="h1" color="primary">
      標題
    </Typography>,
  );
  expect(screen.getByText("標題")).toHaveStyle({ color: "#000000" });
});
```

- [ ] **Step 2: 執行確認失敗**

Run: `npx vitest run src/components/Typography.test.tsx`
Expected: FAIL（`Cannot find module './Typography'`）

- [ ] **Step 3: 寫 `src/components/Typography.tsx`**

```tsx
import * as React from "react";
import MuiTypography from "@mui/material/Typography";
import type { TypographyProps as MuiTypographyProps } from "@mui/material/Typography";
import { resolveSwapTextColor, type SwapTextColor } from "../theme/textColor";

export interface SwapTypographyProps {
  variant?: MuiTypographyProps["variant"];
  color?: SwapTextColor;
  mode?: "" | "dark";
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

const Typography: React.FC<SwapTypographyProps> = ({
  variant = "body1",
  color,
  mode,
  children,
  style,
}) => (
  <MuiTypography
    variant={variant}
    sx={{ color: resolveSwapTextColor(color, mode) }}
    style={style}
  >
    {children}
  </MuiTypography>
);

export default Typography;
```

- [ ] **Step 4: 執行確認通過**

Run: `npm run typecheck && npx vitest run src/components/Typography.test.tsx`
Expected: typecheck 無錯；3 passed

- [ ] **Step 5: 匯出並寫 story**

`src/index.ts` 加：

```ts
export { default as Typography } from "./components/Typography";
export type { SwapTypographyProps } from "./components/Typography";
```

`src/components/Typography.stories.tsx`（對照 v1 的「字級」與「顏色」展示）：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Typography from "./Typography";
import { SWAP_TYPOGRAPHY_VARIANTS } from "../theme/typography.styles";

const meta: Meta<typeof Typography> = {
  title: "Components/Typography",
  component: Typography,
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const Scale: Story = {
  render: () => (
    <Stack spacing={1}>
      {SWAP_TYPOGRAPHY_VARIANTS.map((v) => (
        <Typography key={v} variant={v as never}>
          {v} — SWAP 排版 The quick brown fox
        </Typography>
      ))}
    </Stack>
  ),
};

export const Colors: Story = {
  render: () => (
    <Stack spacing={1}>
      <Typography variant="h4" color="primary">
        primary（黑）
      </Typography>
      <Typography variant="h4" color="secondary">
        secondary（深灰）
      </Typography>
      <Typography variant="h4" color="tertiary">
        tertiary（灰）
      </Typography>
      <Typography variant="h4" color="primary400">
        primary400（品牌藍）
      </Typography>
      <Typography variant="h4" color="danger800">
        danger800（紅）
      </Typography>
    </Stack>
  ),
};

export const DarkMode: Story = {
  parameters: { backgrounds: { default: "dark" } },
  render: () => (
    <Stack spacing={1} sx={{ p: 2, backgroundColor: "#2D2D2D" }}>
      <Typography variant="h4" color="primary" mode="dark">
        primary（白）
      </Typography>
      <Typography variant="h4" color="secondary" mode="dark">
        secondary（淺灰）
      </Typography>
    </Stack>
  ),
};

export const Playground: Story = {
  args: { variant: "body1", color: "primary", children: "SWAP Typography" },
  argTypes: {
    variant: { control: "select", options: SWAP_TYPOGRAPHY_VARIANTS },
    color: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "primary400", "danger800", "success500"],
    },
    mode: { control: "inline-radio", options: ["", "dark"] },
  },
};
```

- [ ] **Step 6: 全鏈驗證**

先重啟 storybook（若在跑）：`pkill -f "storybook dev"`，再：

```bash
npm run typecheck && npm test && npm run build && npm run storybook:build
```

Expected: 全綠；build d.ts 含 Typography 匯出；storybook build 成功。

- [ ] **Step 7: Commit**（先請使用者 review）

```bash
git add src/components/Typography.tsx src/components/Typography.test.tsx src/components/Typography.stories.tsx src/index.ts
git commit -m "feat(component): Typography wrapper（v1 variant/color/mode API，theme 型階 + color resolver）"
```

---

### Task 6: Chrome MCP 互動驗收 + push

**Files:** 無

**Interfaces:**
- Consumes: Task 1–5 產出
- Produces: 驗收紀錄；`v2` push、CI 綠燈。

- [ ] **Step 1: 起 v2 Storybook**

```bash
pkill -f "storybook dev" 2>/dev/null
npm run storybook -- --ci --quiet &
```
等 `curl -sI http://localhost:6006` 回 200。

- [ ] **Step 2: Chrome MCP 驗收（設計文件 §8.5）**

以 Chrome MCP 開 `http://localhost:6006/iframe.html?id=components-typography--scale&viewMode=story`：
- 逐一核對 32 個字級的大小/粗細層次，對照 v1 基準 `docs/superpowers/baseline/v1-screenshots/typography--字級.png`
- 開 `components-typography--colors` 與 `--dark-mode` 核對顏色語意（primary 黑/白隨 mode）
- 開 `--playground` 切 variant/color/mode control，確認即時反映、無 console 錯誤（read_console_messages）
記錄結果。

- [ ] **Step 3: push 並確認 CI**

```bash
git push origin v2
```

```bash
curl -s "https://api.github.com/repos/yosgo-open-source/swap-ui/actions/runs?branch=v2&per_page=1" | \
  python3 -c "import json,sys; r=json.load(sys.stdin)['workflow_runs'][0]; print(r['status'], r.get('conclusion'))"
```

Expected: `completed success`

---

## 計劃完成的定義

- Typography 32 個字級 variant 下沉至 theme（任何元件可引用 `theme.typography.<v>`），型別完整。
- swap-ui 匯出的 `Typography` 保留 v1 的 `variant/color/mode` API，color 語意（含 dark mode）由 resolver 忠實還原。
- `resolveSwapTextColor` 可重用（計劃四 Link/IconButton）。
- 兩層測試綠 + Chrome MCP 驗收通過 + CI 綠燈；Storybook 與 v1 字級基準觀感一致。
- 下一步：計劃四——color-token 家族（Link、IconButton）重用 resolver，及其餘簡單 THEME 元件（Paper、Skeleton、Switch、CircularProgress、Chip、Tooltip、Container、Breadcrumb…）。
