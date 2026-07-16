# swap-ui v2 計劃四：展示/回饋類元件（6 個）實作計劃

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 遷移 Skeleton、Chip、CircularProgress、Tooltip、Container、Paper 六個展示/回饋類元件到 MUI v9，忠實保留 v1 外觀與 props。

**Architecture:** Skeleton 為純 theme override（產品用 `@mui/material/Skeleton`）；其餘五個 v1 版含實質邏輯（配色矩陣、雙層圓環、響應式 padding、maxWidth 映射），保留為 **swap-ui 匯出的薄 wrapper**（底層 MUI + emotion `sx`，對外 props 沿用 v1，產品端維持 `import { X } from "@yosgo/swap-ui"`）。

**薄 wrapper 統一 pattern（每個 wrapper 都遵守，讓 SWAP props 與 MUI props 併存且可複寫）：**
1. **型別 `extends` 底層 MUI 元件的 props** → 產品端可傳入任何 MUI9 props（onClick、disabled、className…），有完整型別。
2. **`React.forwardRef`** → ref 直通底層 MUI 元件。
3. **解構出 SWAP 自訂 props 與 `sx`，其餘 `...rest` 全部 spread 進底層** → MUI props 直通。
4. **`sx` 陣列合併**：`sx={[...ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}`——我們的預設在前、產品端的 `sx` 在後，後者複寫前者。
5. 由 SWAP prop 計算的樣式（如 Chip 由 variant 決定的底色）放在 ourStyles，仍可被產品端 `sx` 複寫。

例外：**CircularProgress** 內部是雙層圓環自製結構，無單一 MUI 元件可直通 props，只接 SWAP props（dark/size/thickness）＋容器 `style`/`className`；手冊會註明。

**Tech Stack:** @mui/material 9.2.0、@emotion、React 19.2、TypeScript 6.0.3、Vitest 4.1.10、Storybook 10.5.0。

## Global Constraints

- **提速模式（2026-07-16 約定）**：整批做完才停下請使用者一次 review；但**每個元件仍獨立 commit**保留乾淨歷史。Chrome MCP 驗收一計劃一次（Task 7）。
- **數值一字不改**：色階/圓角/陰影/間距沿用 v1（來源 `legacy/v1-src/<Component>/`）。
- 沿用既有基礎：`swapColors`（tokens.ts）、`createSwapTheme`、`SWAPThemeProvider`、`resolveSwapTextColor`、設計手冊 MDX 版型（Button.mdx / Typography.mdx）。
- 每元件產出四件：實作 + Storybook story + 設計手冊 `.mdx` + Vitest 測試。
- 每 Task commit 前 `npm run typecheck && npm test` 綠。改 `.storybook`/MDX 後重啟 storybook dev。
- 匯出元件一律加入 `src/index.ts`。MDX 版型同 Button.mdx：`import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks"` + `<Meta of={Stories} />` + 簡介 + 使用時機 + 基本用法(Source) + Canvas 範例。

---

### Task 1: Skeleton（純 theme override）

**Files:**
- Modify: `src/theme/createSwapTheme.ts`（加 MuiSkeleton）
- Test: `src/theme/createSwapTheme.test.ts`（新增案例）
- Create: `src/components/Skeleton.stories.tsx`、`src/components/Skeleton.mdx`

**Interfaces:**
- Consumes: `swapColors`
- Produces: theme.components.MuiSkeleton；產品用 `@mui/material/Skeleton`。v1 樣式：底色 `black400`、`transform: "unset"`（取消預設縮放，維持實心矩形）。

- [ ] **Step 1: 在 createSwapTheme.test.ts 加案例**

```ts
test("MuiSkeleton override 就位", () => {
  const t = createSwapTheme();
  const root = t.components?.MuiSkeleton?.styleOverrides?.root as { backgroundColor?: string } | undefined;
  expect(root?.backgroundColor).toBe("#ECECEC"); // black400
});
```

- [ ] **Step 2: 執行確認失敗**

Run: `npx vitest run src/theme/createSwapTheme.test.ts`　Expected: FAIL（MuiSkeleton undefined）

- [ ] **Step 3: 在 createSwapTheme.ts 的 components 加入（MuiTypography 後）**

```ts
        MuiSkeleton: {
          styleOverrides: {
            root: { backgroundColor: c.black.black400, transform: "unset" },
          },
        },
```

- [ ] **Step 4: 執行確認通過**

Run: `npx vitest run src/theme/createSwapTheme.test.ts && npm run typecheck`　Expected: 全通過

- [ ] **Step 5: 寫 story 與 mdx**

`src/components/Skeleton.stories.tsx`：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const meta: Meta<typeof Skeleton> = { title: "Components/Skeleton", component: Skeleton };
export default meta;
type Story = StoryObj<typeof Skeleton>;

export const Shapes: Story = {
  render: () => (
    <Stack spacing={1} sx={{ width: 240 }}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" height={80} />
      <Skeleton variant="circular" width={40} height={40} />
    </Stack>
  ),
};
```

`src/components/Skeleton.mdx`：

```mdx
import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks";
import * as SkeletonStories from "./Skeleton.stories";

<Meta of={SkeletonStories} />

# Skeleton

載入中的骨架佔位。SWAP 主題把底色統一為淺灰 `black400`、取消預設縮放（實心矩形）。
用原生 MUI Skeleton 即可，樣式由 theme 自動套用。

## 使用時機

- 資料載入時先顯示版面骨架，減少畫面跳動與空白等待感。
- `variant`：文字列用 `text`、圖片/區塊用 `rectangular`、頭像用 `circular`。

## 基本用法

<Source language="tsx" code={`import Skeleton from "@mui/material/Skeleton";

<Skeleton variant="rectangular" height={80} />`} />

## 形狀

<Canvas of={SkeletonStories.Shapes} />
```

- [ ] **Step 6: 驗證並 commit**

Run: `npm run typecheck && npm run storybook:build`　Expected: 成功

```bash
git add src/theme/createSwapTheme.ts src/theme/createSwapTheme.test.ts src/components/Skeleton.stories.tsx src/components/Skeleton.mdx
git commit -m "feat(theme): Skeleton theme override（底色 black400 + 實心）+ 手冊"
```

---

### Task 2: Chip（薄 wrapper）

**Files:**
- Create: `src/components/Chip.tsx`、`src/components/Chip.types.ts`、`src/components/Chip.test.tsx`、`src/components/Chip.stories.tsx`、`src/components/Chip.mdx`
- Modify: `src/index.ts`

**Interfaces:**
- Consumes: `swapColors`
- Produces: `Chip: React.FC<ChipProps>`。props：`variant("neutral"|"primary"|"success"|"danger")`、`outlined`、`contained`、`width`、`height`、`label`、`icon`。
- v1 邏輯：`isOutlined = outlined || !contained`（預設即 outlined 樣式）。outlined→白底+800色邊框+padding `0 8px`；contained→50色底+無框+padding `0 9px`。文字色一律 variant 的 800 色。圓角 4、字 0.75rem/700、height 預設 24、width 預設 fit-content。success 且未給 icon 時自動帶綠勾。

- [ ] **Step 1: 寫測試 `src/components/Chip.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Chip from "./Chip";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("primary contained：50 色底、800 文字", () => {
  r(<Chip variant="primary" contained label="標籤" />);
  const el = screen.getByText("標籤").parentElement as HTMLElement;
  expect(el).toHaveStyle({ backgroundColor: "#E6E9F8", color: "#0035AC" });
});

test("預設（outlined）：白底 + 邊框", () => {
  r(<Chip variant="danger" label="危險" />);
  const el = screen.getByText("危險").parentElement as HTMLElement;
  expect(el).toHaveStyle({ backgroundColor: "#FFFFFF" });
});

test("MUI props 直通、sx 複寫預設樣式", () => {
  r(<Chip variant="primary" contained label="x" data-testid="chip" sx={{ borderRadius: 0 }} />);
  const el = screen.getByTestId("chip");
  expect(el).toHaveStyle({ borderRadius: "0px" }); // sx 複寫我們的 4px
});
```

- [ ] **Step 2: 執行確認失敗**

Run: `npx vitest run src/components/Chip.test.tsx`　Expected: FAIL（模組不存在）

- [ ] **Step 3: 寫 `src/components/Chip.types.ts`**

```ts
import type { BoxProps } from "@mui/material/Box";

export interface ChipProps extends Omit<BoxProps, "color"> {
  variant?: "neutral" | "primary" | "success" | "danger";
  outlined?: boolean;
  contained?: boolean;
  width?: string | number;
  height?: string | number;
  label?: React.ReactNode;
  icon?: React.ReactNode;
}
```

- [ ] **Step 4: 寫 `src/components/Chip.tsx`**

```tsx
import * as React from "react";
import Box from "@mui/material/Box";
import { swapColors as c } from "../theme/tokens";
import type { ChipProps } from "./Chip.types";

const SHADE = {
  neutral: { fill: c.black.black300, border: c.black.black500, text: c.black.black800 },
  primary: { fill: c.primary.primary50, border: c.primary.primary800, text: c.primary.primary800 },
  success: { fill: c.success.success50, border: c.success.success800, text: c.success.success800 },
  danger: { fill: c.danger.danger50, border: c.danger.danger800, text: c.danger.danger800 },
} as const;

const successIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 4.66666L6 12.6667L2.33333 9L3.27333 8.06L6 10.78L13.06 3.72666L14 4.66666Z" fill="#00821E" />
  </svg>
);

const Chip = React.forwardRef<HTMLDivElement, ChipProps>(function Chip(
  { variant = "primary", outlined, contained, width, height, label, icon, sx, ...rest },
  ref,
) {
  const s = SHADE[variant];
  const isOutlined = outlined || !contained;
  const ourStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "4px",
    fontSize: "0.75rem",
    lineHeight: "17px",
    fontWeight: 700,
    width: width ?? "fit-content",
    height: height ?? 24,
    padding: isOutlined ? "0px 8px" : "0px 9px",
    backgroundColor: isOutlined ? c.black.white : s.fill,
    border: isOutlined ? `1px solid ${s.border}` : "none",
    color: s.text,
  };
  return (
    <Box ref={ref} sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
      <Box component="span" sx={{ marginRight: variant === "success" ? "4px" : 0 }}>
        {label}
      </Box>
      {variant === "success" && !icon ? successIcon : icon}
    </Box>
  );
});

export default Chip;
```

- [ ] **Step 5: 執行確認通過**

Run: `npx vitest run src/components/Chip.test.tsx && npm run typecheck`　Expected: 3 passed；typecheck 綠

- [ ] **Step 6: 匯出、story、mdx**

`src/index.ts` 加：

```ts
export { default as Chip } from "./components/Chip";
export type { ChipProps } from "./components/Chip.types";
```

`src/components/Chip.stories.tsx`：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Chip from "./Chip";

const meta: Meta<typeof Chip> = { title: "Components/Chip", component: Chip };
export default meta;
type Story = StoryObj<typeof Chip>;

const VARIANTS = ["neutral", "primary", "success", "danger"] as const;

export const Outlined: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      {VARIANTS.map((v) => (
        <Chip key={v} variant={v} label={v} />
      ))}
    </Stack>
  ),
};

export const Contained: Story = {
  render: () => (
    <Stack direction="row" spacing={1}>
      {VARIANTS.map((v) => (
        <Chip key={v} variant={v} contained label={v} />
      ))}
    </Stack>
  ),
};

export const Playground: Story = {
  args: { variant: "primary", label: "標籤", contained: false },
  argTypes: { variant: { control: "select", options: VARIANTS } },
};
```

`src/components/Chip.mdx`：

```mdx
import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks";
import * as ChipStories from "./Chip.stories";

<Meta of={ChipStories} />

# Chip

標示狀態或分類的小標籤。以 `variant` 決定語意配色，`contained` 切換填色/描邊。

## 使用時機

- **狀態標記**（成功/危險/一般）→ 對應 `success` / `danger` / `neutral`。
- **分類/標籤**：預設描邊樣式較輕，適合大量並列；需要強調時用 `contained` 填色。
- `success` 會自動帶綠勾，不需另外傳 `icon`。

## 基本用法

<Source language="tsx" code={`import { Chip } from "@yosgo/swap-ui";

<Chip variant="success" contained label="已完成" />`} />

## 描邊（預設）

<Canvas of={ChipStories.Outlined} />

## 填色（contained）

<Canvas of={ChipStories.Contained} />
```

- [ ] **Step 7: 驗證並 commit**

Run: `npm run typecheck && npm test && npm run storybook:build`　Expected: 全綠

```bash
git add src/components/Chip.tsx src/components/Chip.types.ts src/components/Chip.test.tsx src/components/Chip.stories.tsx src/components/Chip.mdx src/index.ts
git commit -m "feat(component): Chip（4 variant × 描邊/填色，沿用 v1）+ 手冊"
```

---

### Task 3: CircularProgress（薄 wrapper）

**Files:**
- Create: `src/components/CircularProgress.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`
- Modify: `src/index.ts`

**Interfaces:**
- Consumes: `swapColors`
- Produces: `CircularProgress: React.FC<CircularProgressProps>`。props：`dark`、`size`、`thickness`。v1：雙層圓環——底環（determinate 100%，dark 時白/否則 black500，dark 時 opacity 0.4）+ 轉環（indeterminate，dark 白/否則 primary800）。預設 size 20、thickness 5。

- [ ] **Step 1: 寫測試 `.test.tsx`**

```tsx
import { render } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import CircularProgress from "./CircularProgress";

test("渲染兩層圓環", () => {
  const { container } = render(
    <SWAPThemeProvider>
      <CircularProgress />
    </SWAPThemeProvider>,
  );
  expect(container.querySelectorAll(".MuiCircularProgress-root").length).toBe(2);
});
```

- [ ] **Step 2: 執行確認失敗**　Run: `npx vitest run src/components/CircularProgress.test.tsx`　Expected: FAIL

- [ ] **Step 3: 寫 `.types.ts`**

```ts
export interface CircularProgressProps
  extends React.HTMLAttributes<HTMLDivElement> {
  dark?: boolean;
  size?: number | string;
  thickness?: number;
}
```

（例外元件：內部雙層圓環無單一 MUI 元件可直通 props。改為 `extends React.HTMLAttributes<HTMLDivElement>`，讓容器 div 可接 `style`/`className`/`onClick` 等 DOM props；SWAP props 為 dark/size/thickness。）

- [ ] **Step 4: 寫 `.tsx`**

```tsx
import * as React from "react";
import MuiCircularProgress from "@mui/material/CircularProgress";
import { swapColors as c } from "../theme/tokens";
import type { CircularProgressProps } from "./CircularProgress.types";

const CircularProgress = React.forwardRef<HTMLDivElement, CircularProgressProps>(
  function CircularProgress({ dark, size = 20, thickness = 5, style, ...rest }, ref) {
    return (
      <div ref={ref} style={{ position: "relative", width: size, height: size, ...style }} {...rest}>
        <MuiCircularProgress
          variant="determinate"
          value={100}
          size={size}
          thickness={thickness}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            color: dark ? c.black.white : c.black.black500,
            opacity: dark ? 0.4 : 1,
          }}
        />
        <MuiCircularProgress
          variant="indeterminate"
          size={size}
          thickness={thickness}
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            color: dark ? c.black.white : c.primary.primary800,
          }}
        />
      </div>
    );
  },
);

export default CircularProgress;
```

- [ ] **Step 5: 執行確認通過**　Run: `npx vitest run src/components/CircularProgress.test.tsx && npm run typecheck`　Expected: 1 passed；綠

- [ ] **Step 6: 匯出、story、mdx**

`src/index.ts` 加：

```ts
export { default as CircularProgress } from "./components/CircularProgress";
export type { CircularProgressProps } from "./components/CircularProgress.types";
```

`.stories.tsx`：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import CircularProgress from "./CircularProgress";

const meta: Meta<typeof CircularProgress> = { title: "Components/CircularProgress", component: CircularProgress };
export default meta;
type Story = StoryObj<typeof CircularProgress>;

export const Sizes: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
      <CircularProgress size={20} />
      <CircularProgress size={32} />
      <CircularProgress size={48} thickness={4} />
    </Stack>
  ),
};

export const Dark: Story = {
  render: () => (
    <Stack direction="row" spacing={2} sx={{ p: 2, backgroundColor: "#2D2D2D" }}>
      <CircularProgress dark size={32} />
    </Stack>
  ),
};
```

`.mdx`：

```mdx
import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks";
import * as CPStories from "./CircularProgress.stories";

<Meta of={CPStories} />

# CircularProgress

環形載入指示。SWAP 版是雙層圓環（淺色底環 + 品牌色轉環），比單環更清楚。

## 使用時機

- 局部載入（按鈕內、卡片內、小區塊）用小尺寸；整頁載入用大尺寸置中。
- 深色背景上加 `dark`，圓環自動改用白色系。

## 基本用法

<Source language="tsx" code={`import { CircularProgress } from "@yosgo/swap-ui";

<CircularProgress size={32} />`} />

## 尺寸

<Canvas of={CPStories.Sizes} />

## 深色背景

<Canvas of={CPStories.Dark} />
```

- [ ] **Step 7: 驗證並 commit**

```bash
git add src/components/CircularProgress.* src/index.ts
git commit -m "feat(component): CircularProgress（雙層圓環，沿用 v1）+ 手冊"
```

---

### Task 4: Tooltip（薄 wrapper）

**Files:**
- Create: `src/components/Tooltip.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`
- Modify: `src/index.ts`

**Interfaces:**
- Consumes: `swapColors`、`swapShadows`
- Produces: `Tooltip: React.FC<TooltipProps>`。props：MUI TooltipProps（除 children 另訂）+ `dark`、`light`、`arrow`、`margin`、`marginTop/Bottom/Right/Left`、`width`、`childrenStyle`。v1：dark→black900 底/白字；light→白底/black800 字/淺框；預設同 dark。arrow 時 padding `7.5px 12px`、fontWeight 700；否則 padding 12、fontWeight 400。maxWidth 預設 240。陰影 `swapShadows.m`。字 12/lineHeight 1.4。margin 快捷：marginTop→`0 0 Npx 0` 等。

- [ ] **Step 1: 寫測試 `.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Tooltip from "./Tooltip";

test("hover 顯示 tooltip 文字（open 強制開）", async () => {
  render(
    <SWAPThemeProvider>
      <Tooltip title="說明文字" open>
        <span>目標</span>
      </Tooltip>
    </SWAPThemeProvider>,
  );
  expect(await screen.findByRole("tooltip")).toHaveTextContent("說明文字");
});
```

- [ ] **Step 2: 執行確認失敗**　Run: `npx vitest run src/components/Tooltip.test.tsx`　Expected: FAIL

- [ ] **Step 3: 寫 `.types.ts`**

```ts
import type { TooltipProps as MuiTooltipProps } from "@mui/material/Tooltip";

export interface TooltipProps
  extends Omit<MuiTooltipProps, "children"> {
  children: React.ReactElement;
  dark?: boolean;
  light?: boolean;
  arrow?: boolean;
  margin?: string | number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  marginLeft?: number;
  width?: number | string;
  childrenStyle?: React.CSSProperties;
}
```

- [ ] **Step 4: 寫 `.tsx`**（v9 用 slotProps 取代 classes）

```tsx
import * as React from "react";
import MuiTooltip from "@mui/material/Tooltip";
import { swapColors as c, swapShadows } from "../theme/tokens";
import type { TooltipProps } from "./Tooltip.types";

function resolveMargin(p: TooltipProps): string | number {
  if (p.margin) return p.margin;
  if (p.marginTop) return `0px 0px ${p.marginTop}px 0px`;
  if (p.marginBottom) return `${p.marginBottom}px 0px 0px 0px`;
  if (p.marginRight) return `0px 0px 0px ${p.marginRight}px`;
  if (p.marginLeft) return `0px ${p.marginLeft}px 0px 0px`;
  return "10px 0px";
}

const Tooltip: React.FC<TooltipProps> = (props) => {
  const {
    dark, light, arrow, margin, marginTop, marginBottom, marginRight, marginLeft,
    width = 240, children, childrenStyle, slotProps: userSlotProps, ...other
  } = props;
  const bg = light ? c.black.white : c.black.black900;
  const fg = light ? c.black.black800 : c.black.white;
  const ourTooltipSx = {
    margin: resolveMargin(props),
    backgroundColor: bg,
    color: fg,
    padding: arrow ? "7.5px 12px" : "12px",
    boxShadow: swapShadows.m,
    border: light ? `1px solid ${c.black.black500}` : "none",
    maxWidth: width,
    fontSize: 12,
    lineHeight: 1.4,
    fontWeight: arrow ? 700 : 400,
  };
  // 合併產品端 slotProps：其他 slot 直通，tooltip/arrow 的 sx 以陣列合併（產品端在後、可複寫）
  const us = (userSlotProps ?? {}) as Record<string, { sx?: unknown } | undefined>;
  const asArr = (v: unknown) => (Array.isArray(v) ? v : v ? [v] : []);
  return (
    <MuiTooltip
      {...other}
      arrow={arrow}
      slotProps={{
        ...us,
        tooltip: { ...us.tooltip, sx: [ourTooltipSx, ...asArr(us.tooltip?.sx)] },
        arrow: { ...us.arrow, sx: [{ color: bg }, ...asArr(us.arrow?.sx)] },
      }}
    >
      <span
        style={{
          width: "fit-content",
          height: "fit-content",
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          ...childrenStyle,
        }}
      >
        {children}
      </span>
    </MuiTooltip>
  );
};

export default Tooltip;
```

（註：v1 邊框用 `#CCCCCC` 即 black500；此處以 token 表達，值相同。）

- [ ] **Step 5: 執行確認通過**　Run: `npx vitest run src/components/Tooltip.test.tsx && npm run typecheck`　Expected: 1 passed；綠

- [ ] **Step 6: 匯出、story、mdx**

`src/index.ts` 加：

```ts
export { default as Tooltip } from "./components/Tooltip";
export type { TooltipProps } from "./components/Tooltip.types";
```

`.stories.tsx`：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Tooltip from "./Tooltip";

const meta: Meta<typeof Tooltip> = { title: "Components/Tooltip", component: Tooltip };
export default meta;
type Story = StoryObj<typeof Tooltip>;

export const Variants: Story = {
  render: () => (
    <Stack direction="row" spacing={4} sx={{ p: 6 }}>
      <Tooltip title="深色（預設）" open>
        <Button variant="secondary">dark</Button>
      </Tooltip>
      <Tooltip title="淺色" light open>
        <Button variant="secondary">light</Button>
      </Tooltip>
      <Tooltip title="帶箭頭" arrow open>
        <Button variant="secondary">arrow</Button>
      </Tooltip>
    </Stack>
  ),
};
```

`.mdx`：

```mdx
import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks";
import * as TooltipStories from "./Tooltip.stories";

<Meta of={TooltipStories} />

# Tooltip

滑鼠停留時顯示的補充說明。預設深色底白字；`light` 切淺色、`arrow` 加指向箭頭。

## 使用時機

- 為圖示按鈕、縮寫、需要解釋的欄位提供補充說明，不佔版面。
- 說明較短用預設；需要指向特定元素用 `arrow`。
- 淺色背景區域若深色 tooltip 太重，可用 `light`。

## 基本用法

<Source language="tsx" code={`import { Tooltip } from "@yosgo/swap-ui";

<Tooltip title="說明文字" arrow>
  <IconButton>...</IconButton>
</Tooltip>`} />

## 樣式

<Canvas of={TooltipStories.Variants} />
```

- [ ] **Step 7: 驗證並 commit**

```bash
git add src/components/Tooltip.* src/index.ts
git commit -m "feat(component): Tooltip（dark/light/arrow/margin，v9 slotProps，沿用 v1）+ 手冊"
```

---

### Task 5: Container（薄 wrapper）

**Files:**
- Create: `src/components/Container.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`
- Modify: `src/index.ts`

**Interfaces:**
- Consumes: `useMediaQuery`（`@mui/material`）、`swapBreakpoints`
- Produces: `Container: React.FC<ContainerProps>`。props：`maxWidth(number|"lg"|"xl"|"xxl")`、`padding(number|"xxs"|"xs"|"sm"|"md")`、`children`、`style`。v1：maxWidth lg→960/xl→1140/xxl→1320；padding xxs→`0 8px`/xs→`0 16px`/sm→`0 24px`/md→`0 24px`；未指定時依斷點自動（≥xxl 1320 padding 0；≥xl 1140 padding 0；≥lg 960 padding 0；≥md padding `0 24px`；≥sm `0 24px`；≥xs `0 16px`；else `0 8px`）。

- [ ] **Step 1: 寫測試 `.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Container from "./Container";

test("顯式 maxWidth xl 映射 1140", () => {
  render(
    <SWAPThemeProvider>
      <Container maxWidth="xl">內容</Container>
    </SWAPThemeProvider>,
  );
  const el = screen.getByText("內容");
  expect(el).toHaveStyle({ maxWidth: "1140px" });
});
```

- [ ] **Step 2: 執行確認失敗**　Run: `npx vitest run src/components/Container.test.tsx`　Expected: FAIL

- [ ] **Step 3: 寫 `.types.ts`**

```ts
import type { BoxProps } from "@mui/material/Box";

// Omit maxWidth/padding：Box 系統 props 已有同名，SWAP 語意需覆蓋；其餘 Box props 全部保留可傳
export interface ContainerProps extends Omit<BoxProps, "maxWidth" | "padding"> {
  maxWidth?: number | "lg" | "xl" | "xxl";
  padding?: number | "xxs" | "xs" | "sm" | "md";
}
```

- [ ] **Step 4: 寫 `.tsx`**

```tsx
import * as React from "react";
import Box from "@mui/material/Box";
import useMediaQuery from "@mui/material/useMediaQuery";
import { swapBreakpoints as bp } from "../theme/tokens";
import type { ContainerProps } from "./Container.types";

const MAXW = { lg: 960, xl: 1140, xxl: 1320 } as const;
const PAD = { xxs: "0px 8px", xs: "0px 16px", sm: "0px 24px", md: "0px 24px" } as const;

const Container = React.forwardRef<HTMLDivElement, ContainerProps>(function Container(
  { children, maxWidth, padding, sx, ...rest },
  ref,
) {
  const upXXL = useMediaQuery(`(min-width:${bp.xxl}px)`);
  const upXL = useMediaQuery(`(min-width:${bp.xl}px)`);
  const upLG = useMediaQuery(`(min-width:${bp.lg}px)`);
  const upMD = useMediaQuery(`(min-width:${bp.md}px)`);
  const upSM = useMediaQuery(`(min-width:${bp.sm}px)`);
  const upXS = useMediaQuery(`(min-width:${bp.xs}px)`);

  const resolvedMaxWidth =
    typeof maxWidth === "number"
      ? maxWidth
      : maxWidth
        ? MAXW[maxWidth]
        : upXXL ? 1320 : upXL ? 1140 : upLG ? 960 : undefined;

  const resolvedPadding =
    typeof padding === "number"
      ? padding
      : padding
        ? PAD[padding]
        : upXXL || upXL || upLG
          ? "0px 0px"
          : upMD || upSM ? "0px 24px" : upXS ? "0px 16px" : "0px 8px";

  const ourStyles = {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
    maxWidth: resolvedMaxWidth,
    padding: resolvedPadding,
  };
  return (
    <Box ref={ref} sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest}>
      {children}
    </Box>
  );
});

export default Container;
```

- [ ] **Step 5: 執行確認通過**　Run: `npx vitest run src/components/Container.test.tsx && npm run typecheck`　Expected: 1 passed；綠

- [ ] **Step 6: 匯出、story、mdx**

`src/index.ts` 加：

```ts
export { default as Container } from "./components/Container";
export type { ContainerProps } from "./components/Container.types";
```

`.stories.tsx`：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Container from "./Container";

const meta: Meta<typeof Container> = { title: "Components/Container", component: Container };
export default meta;
type Story = StoryObj<typeof Container>;

export const MaxWidths: Story = {
  render: () => (
    <>
      {(["lg", "xl", "xxl"] as const).map((m) => (
        <Container key={m} maxWidth={m}>
          <div style={{ background: "#E6E9F8", padding: 8, marginBottom: 8, textAlign: "center" }}>
            maxWidth={m}
          </div>
        </Container>
      ))}
    </>
  ),
};
```

`.mdx`：

```mdx
import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks";
import * as ContainerStories from "./Container.stories";

<Meta of={ContainerStories} />

# Container

限制內容最大寬度並置中的版面容器。不指定 `maxWidth`/`padding` 時，會依裝置斷點自動調整。

## 使用時機

- 頁面主要內容區包一層 Container，避免在寬螢幕上文字/元素過度延展。
- `maxWidth`：一般內容 `lg`(960)、較寬 `xl`(1140)、最寬 `xxl`(1320)。
- 不傳 props 即為響應式預設（手機留較小邊距、大螢幕置中不留邊）。

## 基本用法

<Source language="tsx" code={`import { Container } from "@yosgo/swap-ui";

<Container maxWidth="lg">{children}</Container>`} />

## maxWidth

<Canvas of={ContainerStories.MaxWidths} />
```

- [ ] **Step 7: 驗證並 commit**

```bash
git add src/components/Container.* src/index.ts
git commit -m "feat(component): Container（maxWidth 映射 + 響應式 padding，沿用 v1）+ 手冊"
```

---

### Task 6: Paper（薄 wrapper）

**Files:**
- Create: `src/components/Paper.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`
- Modify: `src/index.ts`

**Interfaces:**
- Consumes: `useMediaQuery`、`swapColors`、`swapShadows`、`swapBreakpoints`
- Produces: `Paper: React.FC<PaperProps>`。props：MUI PaperProps + `width`、`height`。v1：`variant="outlined"`、boxShadow xl、borderRadius 12、border black500、width/height 預設 100%、padding 響應式（≥sm 40／≥xs 24／else 16）。

- [ ] **Step 1: 寫測試 `.test.tsx`**

```tsx
import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Paper from "./Paper";

test("套用圓角 12 與外框", () => {
  render(
    <SWAPThemeProvider>
      <Paper>內容</Paper>
    </SWAPThemeProvider>,
  );
  const el = screen.getByText("內容");
  expect(el).toHaveStyle({ borderRadius: "12px" });
});
```

- [ ] **Step 2: 執行確認失敗**　Run: `npx vitest run src/components/Paper.test.tsx`　Expected: FAIL

- [ ] **Step 3: 寫 `.types.ts`**

```ts
import type { PaperProps as MuiPaperProps } from "@mui/material/Paper";

export interface PaperProps extends MuiPaperProps {
  width?: number | string;
  height?: number | string;
}
```

- [ ] **Step 4: 寫 `.tsx`**

```tsx
import * as React from "react";
import MuiPaper from "@mui/material/Paper";
import useMediaQuery from "@mui/material/useMediaQuery";
import { swapColors as c, swapShadows, swapBreakpoints as bp } from "../theme/tokens";
import type { PaperProps } from "./Paper.types";

const Paper = React.forwardRef<HTMLDivElement, PaperProps>(function Paper(
  { width, height, sx, ...rest },
  ref,
) {
  const upSM = useMediaQuery(`(min-width:${bp.sm}px)`);
  const upXS = useMediaQuery(`(min-width:${bp.xs}px)`);
  const padding = upSM ? 40 : upXS ? 24 : 16;
  const ourStyles = {
    boxShadow: swapShadows.xl,
    borderRadius: "12px",
    border: `1px solid ${c.black.black500}`,
    width: width ?? "100%",
    height: height ?? "100%",
    padding: `${padding}px`,
  };
  return (
    <MuiPaper
      ref={ref}
      variant="outlined"
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    />
  );
});

export default Paper;
```

- [ ] **Step 5: 執行確認通過**　Run: `npx vitest run src/components/Paper.test.tsx && npm run typecheck`　Expected: 1 passed；綠

- [ ] **Step 6: 匯出、story、mdx**

`src/index.ts` 加：

```ts
export { default as Paper } from "./components/Paper";
export type { PaperProps } from "./components/Paper.types";
```

`.stories.tsx`：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Paper from "./Paper";
import Typography from "./Typography";

const meta: Meta<typeof Paper> = { title: "Components/Paper", component: Paper };
export default meta;
type Story = StoryObj<typeof Paper>;

export const Basic: Story = {
  render: () => (
    <div style={{ width: 360 }}>
      <Paper>
        <Typography variant="title">卡片標題</Typography>
        <Typography variant="body2" color="tertiary">
          Paper 是帶外框與陰影的內容容器，內距會依裝置自動調整。
        </Typography>
      </Paper>
    </div>
  ),
};
```

`.mdx`：

```mdx
import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks";
import * as PaperStories from "./Paper.stories";

<Meta of={PaperStories} />

# Paper

帶外框與陰影的內容容器（12 圓角、xl 陰影），內距依裝置自動調整（桌機 40 / 平板 24 / 手機 16）。

## 使用時機

- 需要把一組內容框成一個視覺區塊（表單卡片、資訊卡、設定區塊）。
- 預設寬高填滿父容器；用 `width` / `height` 指定固定尺寸。
- 需要更輕的分隔（無陰影）時，用一般 MUI Paper 或 Card 而非此元件。

## 基本用法

<Source language="tsx" code={`import { Paper } from "@yosgo/swap-ui";

<Paper>{children}</Paper>`} />

## 基本樣式

<Canvas of={PaperStories.Basic} />
```

- [ ] **Step 7: 驗證並 commit**

```bash
git add src/components/Paper.* src/index.ts
git commit -m "feat(component): Paper（outlined + 響應式內距，沿用 v1）+ 手冊"
```

---

### Task 7: 整批驗證、Chrome MCP 驗收、push

**Files:** 無

**Interfaces:**
- Consumes: Task 1–6 產出
- Produces: 整批綠燈 + Chrome MCP 驗收紀錄 + push、CI 綠。

- [ ] **Step 1: 整批全鏈驗證**

Run: `npm run typecheck && npm test && npm run build && npm run storybook:build`
Expected: 全綠；test 通過（含新增 6 元件的單元 + 瀏覽器 story 測試）；build d.ts 含 Chip/CircularProgress/Tooltip/Container/Paper 匯出。

- [ ] **Step 2: 重啟 storybook 並 Chrome MCP 驗收**

```bash
pkill -f "storybook dev" 2>/dev/null; npm run storybook -- --ci --quiet &
```
等 200 後，以 Chrome MCP 逐一開 6 元件的 Docs 頁（`components-chip--docs` 等），確認：手冊版型、Canvas 即時預覽、無 console 錯誤；抽查對照 v1 基準截圖（`docs/superpowers/baseline/v1-screenshots/chip--*.png` 等）。

- [ ] **Step 3: push 並確認 CI**

```bash
git push origin v2
curl -s "https://api.github.com/repos/yosgo-open-source/swap-ui/actions/runs?branch=v2&per_page=1" | \
  python3 -c "import json,sys; r=json.load(sys.stdin)['workflow_runs'][0]; print(r['status'], r.get('conclusion'))"
```
Expected: `completed success`

---

## 計劃完成的定義

- Skeleton 下沉 theme；Chip / CircularProgress / Tooltip / Container / Paper 為 swap-ui 匯出的薄 wrapper，props 與 v1 一致。
- 6 個元件皆有：實作 + story + 設計手冊 MDX + 測試；兩層測試綠 + Chrome MCP 驗收 + CI 綠。
- 整批一次 review（VS Code 看 6 個 commit 的 diff）。
- 下一步：計劃五（文字/導覽類：Link、IconButton、Breadcrumb、BreadcrumbItem、Pagination，重用 resolveSwapTextColor）。
