# swap-ui v2 計劃五：文字/導覽類（5 元件）+ 側欄分類 實作計劃

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 遷移 Link、IconButton、Pagination、BreadcrumbItem、Breadcrumb 五個元件；同時把 Storybook 側欄改為「分類 + 字母排序」（使用者要求，方便查找）。

**Architecture:** Pagination 為純 theme override（產品用 `@mui/material/Pagination`）。Link / IconButton 需要 token 色 props、Breadcrumb(Item) 為組合——四者為 swap-ui 薄 wrapper（遵守 [[swap-ui-wrapper-pattern]]：extends MUI props + forwardRef + sx 陣列合併 + rest 直通）。側欄分類：story title 改為 `<分類>/<元件>`，preview 加 `storySort` 字母排序。

**Tech Stack:** 同計劃四。

## Global Constraints

- **批次模式**：整批做完才停下請使用者一次 review；每元件獨立 commit；Chrome MCP 驗收一次（Task 7）。
- **數值一字不改**（來源 `legacy/v1-src/<Component>/`）。忠實還原注意：**v1 Link 的 color 只認 token 名**（`primary`/`secondary`/`tertiary` 落到預設 black1000），與 Typography 的語意色不同，勿誤用 `resolveSwapTextColor`。
- 薄 wrapper 遵守統一 pattern；每個 wrapper 測試含「MUI props 直通 + sx 複寫」斷言（Link 代表本批驗證一次即可，其餘元件至少驗 props 直通）。
- 每元件：實作 + story + 手冊 MDX + 測試；MDX 版型同 Button.mdx。
- 側欄分類定案：**Inputs**（Button、IconButton）、**Display**（Typography、Chip、Paper、Tooltip）、**Feedback**（Skeleton、CircularProgress）、**Navigation**（Link、Breadcrumb、Pagination）、**Layout**（Container）。
- 每 Task commit 前 `npm run typecheck && npm test` 綠（storybook 瀏覽器測試首跑若因 Vite optimize 轉紅，重跑一次確認）。

---

### Task 1: 側欄分類 + 字母排序（含既有 8 元件改 title）

**Files:**
- Modify: `.storybook/preview.tsx`（加 storySort）
- Modify: 既有全部 `src/components/*.stories.tsx` 的 `title`（8 檔）

**Interfaces:**
- Produces: 側欄結構 `Inputs/…`、`Display/…` 等，分類內字母排序。本計劃新元件直接用新分類 title。

- [ ] **Step 1: preview.tsx 加 storySort**

在 `parameters` 內加：

```ts
    options: {
      storySort: {
        method: "alphabetical",
        order: ["Inputs", "Display", "Feedback", "Navigation", "Layout"],
      },
    },
```

- [ ] **Step 2: 改既有 stories title**

| 檔案 | title 改為 |
|---|---|
| Button.stories.tsx | `Inputs/Button` |
| Typography.stories.tsx | `Display/Typography` |
| Chip.stories.tsx | `Display/Chip` |
| Paper.stories.tsx | `Display/Paper` |
| Tooltip.stories.tsx | `Display/Tooltip` |
| Skeleton.stories.tsx | `Feedback/Skeleton` |
| CircularProgress.stories.tsx | `Feedback/CircularProgress` |
| Container.stories.tsx | `Layout/Container` |

（MDX 用 `<Meta of={Stories} />` 跟隨 CSF title，不需改。）

- [ ] **Step 3: 驗證**

```bash
npm run storybook:build 2>&1 | tail -2
```
Expected: build 成功。（側欄視覺於 Task 7 Chrome MCP 一併確認。）

- [ ] **Step 4: Commit**

```bash
git add .storybook/preview.tsx src/components/*.stories.tsx
git commit -m "docs(storybook): 側欄分類（Inputs/Display/Feedback/Navigation/Layout）+ 字母排序"
```

---

### Task 2: token 色共用表匯出

**Files:**
- Modify: `src/theme/textColor.ts`（匯出 `swapTokenMap`）
- Test: `src/theme/textColor.test.ts`（新增案例）

**Interfaces:**
- Produces: `swapTokenMap: Record<string, string>`——60+ token 名 → hex 的攤平表（Link/IconButton 共用；與 `resolveSwapTextColor` 內部同一份，避免重複）。

- [ ] **Step 1: 加測試**

```ts
import { swapTokenMap } from "./textColor";

test("swapTokenMap 攤平表", () => {
  expect(swapTokenMap.primary400).toBe("#4862CC");
  expect(swapTokenMap.black1000).toBe("#000000");
  expect(swapTokenMap.white).toBe("#FFFFFF");
});
```

- [ ] **Step 2: 執行失敗 → 改 `textColor.ts` 把內部 `tokenMap` 改名 `swapTokenMap` 並 `export`（`resolveSwapTextColor` 內引用同步改名）**

- [ ] **Step 3: 驗證並 commit**

```bash
npx vitest run src/theme/textColor.test.ts && npm run typecheck
git add src/theme/textColor.ts src/theme/textColor.test.ts
git commit -m "feat(theme): 匯出 swapTokenMap（token→hex 攤平表，Link/IconButton 共用）"
```

---

### Task 3: Link（薄 wrapper）

**Files:**
- Create: `src/components/Link.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`
- Modify: `src/index.ts`

**Interfaces:**
- Consumes: `swapTokenMap`、`swapColors`
- Produces: `Link`。props：MUI LinkProps（omit color）+ `color?: string`（token 名）。
- v1 樣式：cursor pointer、fontWeight 700、borderRadius 4、lineHeight 1.4、outline none；**color 僅認 token 名，否則 black1000**；focus-visible：padding 8 + 1px primary400 邊框；`tabIndex=0`；underline 預設 hover（v4 預設，v9 預設 always 需顯式設回）。

- [ ] **Step 1: 測試**

```tsx
import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Link from "./Link";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("token 色", () => {
  r(<Link color="primary400" href="#">連結</Link>);
  expect(screen.getByText("連結")).toHaveStyle({ color: "#4862CC" });
});

test("非 token（含 v1 的 secondary）落到 black1000", () => {
  r(<Link color="secondary" href="#">黑連結</Link>);
  expect(screen.getByText("黑連結")).toHaveStyle({ color: "#000000" });
});

test("MUI props 直通 + sx 複寫", () => {
  r(<Link href="#" data-testid="lk" sx={{ fontWeight: 400 }}>x</Link>);
  expect(screen.getByTestId("lk")).toHaveStyle({ fontWeight: 400 });
});
```

- [ ] **Step 2: 執行失敗 → 寫 `.types.ts` 與 `.tsx`**

`.types.ts`：

```ts
import type { LinkProps as MuiLinkProps } from "@mui/material/Link";

export interface LinkProps extends Omit<MuiLinkProps, "color"> {
  /** SWAP token 名（如 primary400）；非 token 一律 black1000 */
  color?: string;
}
```

`.tsx`：

```tsx
import * as React from "react";
import MuiLink from "@mui/material/Link";
import { swapTokenMap } from "../theme/textColor";
import { swapColors as c } from "../theme/tokens";
import type { LinkProps } from "./Link.types";

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(function Link(
  { color, sx, ...rest },
  ref,
) {
  const ourStyles = {
    cursor: "pointer",
    color: (color && swapTokenMap[color]) || c.black.black1000,
    fontWeight: 700,
    borderRadius: "4px",
    lineHeight: 1.4,
    outline: "none",
    boxSizing: "border-box" as const,
    "&:focus-visible": {
      padding: "8px",
      border: `1px solid ${c.primary.primary400}`,
    },
  };
  return (
    <MuiLink
      ref={ref}
      underline="hover"
      tabIndex={0}
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    />
  );
});

export default Link;
```

- [ ] **Step 3: 驗證通過 → 匯出 + story + mdx**

`src/index.ts` 加：

```ts
export { default as Link } from "./components/Link";
export type { LinkProps } from "./components/Link.types";
```

`.stories.tsx`（title `Navigation/Link`）：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import Link from "./Link";

const meta: Meta<typeof Link> = { title: "Navigation/Link", component: Link };
export default meta;
type Story = StoryObj<typeof Link>;

export const Colors: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <Link href="#">預設（黑）</Link>
      <Link href="#" color="primary400">primary400</Link>
      <Link href="#" color="danger800">danger800</Link>
    </Stack>
  ),
};
```

`.mdx`：

```mdx
import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks";
import * as LinkStories from "./Link.stories";

<Meta of={LinkStories} />

# Link

文字連結。粗體、hover 顯示底線，鍵盤 focus 帶品牌色外框。

## 使用時機

- 導向其他頁面或外部資源的行內文字。
- 觸發「動作」（送出、開 Modal）請用 Button 的 `text` variant，不要用 Link。
- `color` 接 SWAP token 名（如 `primary400`）；不指定為黑色。

## 基本用法

<Source language="tsx" code={`import { Link } from "@yosgo/swap-ui";

<Link href="/pricing" color="primary400">查看方案</Link>`} />

## 顏色

<Canvas of={LinkStories.Colors} />
```

- [ ] **Step 4: commit**

```bash
git add src/components/Link.* src/index.ts
git commit -m "feat(component): Link（token 色 + focus-visible 外框，沿用 v1）+ 手冊"
```

---

### Task 4: IconButton（薄 wrapper）

**Files:**
- Create: `src/components/IconButton.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`
- Modify: `src/index.ts`

**Interfaces:**
- Consumes: `swapTokenMap`、`swapColors`
- Produces: `IconButton`。props：MUI IconButtonProps + `width`、`height`、`hoverColor`、`hoverIconColor`（token 名或任意 CSS 色）。
- v1：預設 32×32、圓角 8；hover 底色（預設 black400，可 token 或任意字串）；hoverIconColor 有給時 hover 讓 `svg path` fill 變色。

- [ ] **Step 1: 測試**

```tsx
import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import IconButton from "./IconButton";

test("預設尺寸 32 圓角 8 + onClick 直通", () => {
  const fn = vi.fn();
  render(
    <SWAPThemeProvider>
      <IconButton data-testid="ib" onClick={fn}>
        <svg />
      </IconButton>
    </SWAPThemeProvider>,
  );
  const el = screen.getByTestId("ib");
  expect(el).toHaveStyle({ width: "32px", borderRadius: "8px" });
  el.click();
  expect(fn).toHaveBeenCalled();
});
```

- [ ] **Step 2: 執行失敗 → 寫 `.types.ts` 與 `.tsx`**

`.types.ts`：

```ts
import type { IconButtonProps as MuiIconButtonProps } from "@mui/material/IconButton";

export interface IconButtonProps extends MuiIconButtonProps {
  width?: number | string;
  height?: number | string;
  /** hover 底色：SWAP token 名或任意 CSS 色，預設 black400 */
  hoverColor?: string;
  /** hover 時 svg path 的 fill：token 名或任意 CSS 色 */
  hoverIconColor?: string;
}
```

`.tsx`：

```tsx
import * as React from "react";
import MuiIconButton from "@mui/material/IconButton";
import { swapTokenMap } from "../theme/textColor";
import { swapColors as c } from "../theme/tokens";
import type { IconButtonProps } from "./IconButton.types";

const resolve = (v?: string) => (v ? (swapTokenMap[v] ?? v) : undefined);

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { width = 32, height = 32, hoverColor, hoverIconColor, sx, ...rest },
  ref,
) {
  const hoverBg = resolve(hoverColor) ?? c.black.black400;
  const hoverFill = resolve(hoverIconColor);
  const ourStyles = {
    width,
    height,
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: hoverBg,
      ...(hoverFill ? { "& svg path": { fill: hoverFill } } : {}),
    },
  };
  return <MuiIconButton ref={ref} sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]} {...rest} />;
});

export default IconButton;
```

（註：v1 theme 已把 MuiIconButton padding 設 0（createSwapTheme 既有 override），此處不重複。）

- [ ] **Step 3: 驗證通過 → 匯出 + story（title `Inputs/IconButton`）+ mdx**

`src/index.ts` 加：

```ts
export { default as IconButton } from "./components/IconButton";
export type { IconButtonProps } from "./components/IconButton.types";
```

`.stories.tsx`：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Stack from "@mui/material/Stack";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "./IconButton";

const meta: Meta<typeof IconButton> = { title: "Inputs/IconButton", component: IconButton };
export default meta;
type Story = StoryObj<typeof IconButton>;

export const Hover: Story = {
  render: () => (
    <Stack direction="row" spacing={2}>
      <IconButton><CloseIcon /></IconButton>
      <IconButton hoverColor="primary50" hoverIconColor="primary400"><CloseIcon /></IconButton>
      <IconButton hoverColor="danger50" hoverIconColor="danger800"><CloseIcon /></IconButton>
    </Stack>
  ),
};
```

`.mdx`：

```mdx
import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks";
import * as IconButtonStories from "./IconButton.stories";

<Meta of={IconButtonStories} />

# IconButton

純圖示按鈕（32×32、圓角 8）。hover 顯示底色，可用 `hoverColor` / `hoverIconColor` 客製。

## 使用時機

- 空間有限的操作（關閉、更多、編輯）；務必搭配 Tooltip 或 aria-label 說明用途。
- 語意提示：中性操作用預設灰、主要用 primary 系、破壞性用 danger 系 hover 色。

## 基本用法

<Source language="tsx" code={`import { IconButton } from "@yosgo/swap-ui";

<IconButton hoverColor="danger50" hoverIconColor="danger800" aria-label="刪除">
  <DeleteIcon />
</IconButton>`} />

## Hover 配色

<Canvas of={IconButtonStories.Hover} />
```

- [ ] **Step 4: commit**

```bash
git add src/components/IconButton.* src/index.ts
git commit -m "feat(component): IconButton（hover 底色/圖示色，沿用 v1）+ 手冊"
```

---

### Task 5: Pagination（純 theme override）

**Files:**
- Modify: `src/theme/createSwapTheme.ts`（MuiPagination + MuiPaginationItem）
- Test: `src/theme/createSwapTheme.test.ts`（新增案例）
- Create: `src/components/Pagination.stories.tsx`、`src/components/Pagination.mdx`

**Interfaces:**
- Produces: 產品直接用 `@mui/material/Pagination`。v1 樣式進 theme：defaultProps `shape="rounded"`、`variant="outlined"`；item：24×24、圓角 5、邊框 black500、字 black800 11px/700、margin `0 2px`、padding 0；hover：邊框 black800、白底；selected：白字、primary400 底、無框、陰影 s（hover 同底色）。

- [ ] **Step 1: 加測試**

```ts
test("MuiPagination/MuiPaginationItem override 就位", () => {
  const t = createSwapTheme();
  expect(t.components?.MuiPagination?.defaultProps?.shape).toBe("rounded");
  const item = t.components?.MuiPaginationItem?.styleOverrides?.root as Record<string, unknown>;
  expect(item.width).toBe(24);
});
```

- [ ] **Step 2: 執行失敗 → createSwapTheme components 加（MuiSkeleton 後）**

```ts
        MuiPagination: {
          defaultProps: { shape: "rounded", variant: "outlined" },
        },
        MuiPaginationItem: {
          styleOverrides: {
            root: {
              minWidth: 24,
              width: 24,
              height: 24,
              borderRadius: "5px",
              borderColor: c.black.black500,
              color: c.black.black800,
              padding: 0,
              margin: "0px 2px",
              fontSize: 11,
              fontWeight: 700,
              lineHeight: 1.4,
              transition: "color 250ms, background-color 250ms",
              "&:hover": {
                borderColor: c.black.black800,
                backgroundColor: c.black.white,
              },
              "&.Mui-selected": {
                color: c.black.white,
                backgroundColor: c.primary.primary400,
                border: "none",
                boxShadow: swapShadows.s,
                "&:hover": { backgroundColor: c.primary.primary400 },
              },
            },
          },
        },
```

- [ ] **Step 3: 驗證通過 → story（title `Navigation/Pagination`，用原生 MUI Pagination）+ mdx**

`.stories.tsx`：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Pagination from "@mui/material/Pagination";

const meta: Meta<typeof Pagination> = { title: "Navigation/Pagination", component: Pagination };
export default meta;
type Story = StoryObj<typeof Pagination>;

export const Basic: Story = { args: { count: 10, defaultPage: 3 } };
export const Many: Story = { args: { count: 30, defaultPage: 15, siblingCount: 1 } };
```

`.mdx`：

```mdx
import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks";
import * as PaginationStories from "./Pagination.stories";

<Meta of={PaginationStories} />

# Pagination

分頁導覽。SWAP 樣式（24px 方塊、品牌藍選中態）由 theme 自動套用，直接用原生 MUI Pagination。

## 使用時機

- 清單/表格資料量大需要分頁時；`count` 為總頁數，`onChange` 取得目標頁。
- 無限捲動的行動裝置情境可考慮不用分頁。

## 基本用法

<Source language="tsx" code={`import Pagination from "@mui/material/Pagination";

<Pagination count={10} page={page} onChange={(e, p) => setPage(p)} />`} />

## 基本

<Canvas of={PaginationStories.Basic} />

## 多頁（省略號）

<Canvas of={PaginationStories.Many} />
```

- [ ] **Step 4: commit**

```bash
git add src/theme/createSwapTheme.ts src/theme/createSwapTheme.test.ts src/components/Pagination.stories.tsx src/components/Pagination.mdx
git commit -m "feat(theme): Pagination theme override（24px item/品牌藍選中，沿用 v1）+ 手冊"
```

---

### Task 6: BreadcrumbItem + Breadcrumb（薄 wrapper 組合）

**Files:**
- Create: `src/components/BreadcrumbItem.tsx`、`src/components/Breadcrumb.tsx`、各自 `.types.ts`、合併測試 `src/components/Breadcrumb.test.tsx`、`src/components/Breadcrumb.stories.tsx`、`src/components/Breadcrumb.mdx`
- Modify: `src/index.ts`

**Interfaces:**
- Consumes: `Link`（Task 3）
- Produces:
  - `BreadcrumbItem`：LinkProps + `last?: boolean`——last→black1000/700/無底線/cursor unset；否則 black800/400。
  - `Breadcrumb`：`children: React.ReactNode[]`、`separator?`（預設 "/"）、`maxItems?` + div props。超過 maxItems 收合為「⋯」，點開 MUI Menu 顯示隱藏項（點擊依 item 的 href/target 導航）。末項字重 700。整列 fontSize 14。
- v1 改良（記入 commit 訊息）：key 用 index 而非 Math.random；移除 console.log。

- [ ] **Step 1: 測試**

```tsx
import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("渲染全部項目與分隔符", () => {
  r(
    <Breadcrumb>
      {[
        <BreadcrumbItem key="a" href="/a">首頁</BreadcrumbItem>,
        <BreadcrumbItem key="b" href="/b">列表</BreadcrumbItem>,
        <BreadcrumbItem key="c" last>詳情</BreadcrumbItem>,
      ]}
    </Breadcrumb>,
  );
  expect(screen.getByText("首頁")).toBeInTheDocument();
  expect(screen.getByText("詳情")).toHaveStyle({ color: "#000000" });
  expect(screen.getAllByText("/").length).toBe(2);
});

test("maxItems 收合出現省略鈕", () => {
  r(
    <Breadcrumb maxItems={2}>
      {[
        <BreadcrumbItem key="a" href="/a">A</BreadcrumbItem>,
        <BreadcrumbItem key="b" href="/b">B</BreadcrumbItem>,
        <BreadcrumbItem key="c" last>C</BreadcrumbItem>,
      ]}
    </Breadcrumb>,
  );
  expect(screen.getByTestId("breadcrumb-ellipsis")).toBeInTheDocument();
  expect(screen.queryByText("B")).not.toBeInTheDocument(); // 收進選單
});
```

- [ ] **Step 2: 執行失敗 → 實作**

`BreadcrumbItem.types.ts`：

```ts
import type { LinkProps } from "./Link.types";

export interface BreadcrumbItemProps extends LinkProps {
  last?: boolean;
}
```

`BreadcrumbItem.tsx`：

```tsx
import * as React from "react";
import Link from "./Link";
import type { BreadcrumbItemProps } from "./BreadcrumbItem.types";

const BreadcrumbItem = React.forwardRef<HTMLAnchorElement, BreadcrumbItemProps>(
  function BreadcrumbItem({ last, sx, ...rest }, ref) {
    const ourStyles = {
      fontWeight: last ? 700 : 400,
      ...(last ? { cursor: "unset", textDecoration: "none", "&:hover": { textDecoration: "none" } } : {}),
    };
    return (
      <Link
        ref={ref}
        color={last ? "black1000" : "black800"}
        sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
        {...rest}
      />
    );
  },
);

export default BreadcrumbItem;
```

`Breadcrumb.types.ts`：

```ts
import type * as React from "react";

export interface BreadcrumbProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode[];
  separator?: React.ReactNode;
  maxItems?: number;
}
```

`Breadcrumb.tsx`（收合邏輯沿 v1，key 改 index、移除 console.log；省略鈕 `data-testid="breadcrumb-ellipsis"`；隱藏項用 MUI Menu/MenuItem，點擊依 child props 的 href/target 導航）：

```tsx
import * as React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "./Typography";
import type { BreadcrumbProps } from "./Breadcrumb.types";

const Sep: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Typography variant="body2" style={{ margin: "0 8px" }}>
    {children}
  </Typography>
);

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(function Breadcrumb(
  { maxItems, separator = "/", children, style, ...rest },
  ref,
) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const items = React.Children.toArray(children);
  const collapsed = !!maxItems && items.length > maxItems;
  const tail = collapsed ? items.slice(items.length - maxItems + 1) : items;
  const hidden = collapsed ? items.slice(1, items.length - maxItems + 1) : [];

  const row = (node: React.ReactNode, isLast: boolean, key: React.Key) => (
    <div key={key} style={{ display: "flex", alignItems: "center", fontSize: 14, fontWeight: isLast ? 700 : 400 }}>
      {node}
      {!isLast && <Sep>{separator}</Sep>}
    </div>
  );

  return (
    <div ref={ref} style={{ display: "flex", alignItems: "center", ...style }} {...rest}>
      {collapsed ? (
        <>
          <div style={{ display: "flex", alignItems: "center", fontSize: 14 }}>
            {items[0]}
            <Sep>{separator}</Sep>
            <div
              data-testid="breadcrumb-ellipsis"
              onClick={(e) => setAnchorEl(e.currentTarget)}
              style={{ cursor: "pointer", fontWeight: 700 }}
            >
              ⋯
            </div>
            <Sep>{separator}</Sep>
          </div>
          {tail.map((node, i) => row(node, i === tail.length - 1, i))}
        </>
      ) : (
        items.map((node, i) => row(node, i === items.length - 1, i))
      )}
      <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={() => setAnchorEl(null)}>
        {hidden.map((node, i) => {
          const el = node as React.ReactElement<{ children?: React.ReactNode; href?: string; target?: string }>;
          return (
            <MenuItem
              key={i}
              onClick={() => {
                const { href, target } = el.props;
                if (href) {
                  if (target === "_blank") window.open(href);
                  else window.location.href = href;
                }
                setAnchorEl(null);
              }}
            >
              {el.props.children}
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
});

export default Breadcrumb;
```

（註：v1 的省略鈕為自製三點 SVG；此處以「⋯」字元呈現同等視覺，Task 7 驗收若觀感差異大再換回 SVG。）

- [ ] **Step 3: 驗證通過 → 匯出 + story（title `Navigation/Breadcrumb`）+ mdx**

`src/index.ts` 加：

```ts
export { default as Breadcrumb } from "./components/Breadcrumb";
export type { BreadcrumbProps } from "./components/Breadcrumb.types";
export { default as BreadcrumbItem } from "./components/BreadcrumbItem";
export type { BreadcrumbItemProps } from "./components/BreadcrumbItem.types";
```

`.stories.tsx`：

```tsx
import type { Meta, StoryObj } from "@storybook/react-vite";
import Breadcrumb from "./Breadcrumb";
import BreadcrumbItem from "./BreadcrumbItem";

const meta: Meta<typeof Breadcrumb> = { title: "Navigation/Breadcrumb", component: Breadcrumb };
export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Basic: Story = {
  render: () => (
    <Breadcrumb>
      {[
        <BreadcrumbItem key="1" href="#">首頁</BreadcrumbItem>,
        <BreadcrumbItem key="2" href="#">會員中心</BreadcrumbItem>,
        <BreadcrumbItem key="3" last>請款單</BreadcrumbItem>,
      ]}
    </Breadcrumb>
  ),
};

export const Collapsed: Story = {
  render: () => (
    <Breadcrumb maxItems={3}>
      {[
        <BreadcrumbItem key="1" href="#">首頁</BreadcrumbItem>,
        <BreadcrumbItem key="2" href="#">會員中心</BreadcrumbItem>,
        <BreadcrumbItem key="3" href="#">請款</BreadcrumbItem>,
        <BreadcrumbItem key="4" href="#">2026</BreadcrumbItem>,
        <BreadcrumbItem key="5" last>七月帳單</BreadcrumbItem>,
      ]}
    </Breadcrumb>
  ),
};
```

`.mdx`：

```mdx
import { Meta, Canvas, Source } from "@storybook/addon-docs/blocks";
import * as BreadcrumbStories from "./Breadcrumb.stories";

<Meta of={BreadcrumbStories} />

# Breadcrumb

麵包屑導覽，標示當前頁在層級中的位置。最後一項用 `last`（黑色粗體、不可點）。

## 使用時機

- 層級三層以上的頁面（列表 → 分類 → 詳情），幫使用者快速回上層。
- 層級太深時給 `maxItems`，中間項會收合成「⋯」選單。

## 基本用法

<Source language="tsx" code={`import { Breadcrumb, BreadcrumbItem } from "@yosgo/swap-ui";

<Breadcrumb>
  {[
    <BreadcrumbItem key="1" href="/">首頁</BreadcrumbItem>,
    <BreadcrumbItem key="2" last>目前頁面</BreadcrumbItem>,
  ]}
</Breadcrumb>`} />

## 基本

<Canvas of={BreadcrumbStories.Basic} />

## 收合（maxItems）

<Canvas of={BreadcrumbStories.Collapsed} />
```

- [ ] **Step 4: commit**

```bash
git add src/components/Breadcrumb.* src/components/BreadcrumbItem.* src/index.ts
git commit -m "feat(component): Breadcrumb + BreadcrumbItem（maxItems 收合選單，沿用 v1；key/console 修正）+ 手冊"
```

---

### Task 7: 整批驗證、Chrome MCP 驗收、push

- [ ] **Step 1: 全鏈驗證**

Run: `npm run typecheck && npm test && npm run build && npm run storybook:build`
Expected: 全綠（瀏覽器測試首跑轉紅則重跑確認）。

- [ ] **Step 2: 重啟 storybook + Chrome MCP 驗收**

重啟 dev server 後驗收：**側欄分類與字母排序**（本批重點）、5 個新元件 Docs 頁與互動（Link focus 外框、IconButton hover 變色、Pagination 選中態、Breadcrumb 收合選單展開）、無 console 錯誤。

- [ ] **Step 3: push + CI 綠**

```bash
git push origin v2
```

---

## 計劃完成的定義

- 側欄呈現 Inputs/Display/Feedback/Navigation/Layout 分類、分類內字母排序。
- Link/IconButton/Breadcrumb(Item) wrapper + Pagination theme override，樣式沿用 v1；各含 story + 手冊 + 測試。
- 全鏈綠 + Chrome MCP 驗收 + CI 綠；整批一次 review。
- 下一步：計劃六（表單輸入類：TextField、CheckBox、RadioButton、Switch、Select、Menu、MenuItem）。
