# swap-ui v1 → v2 遷移指南

> 適用對象:使用 `@yosgo/swap-ui@^1.x`(MUI v4)的產品端專案。
> 照本指南由上而下執行,即可完成遷移。全程遇到的絕大多數改動點,TypeScript 編譯器都會直接標出來。

## 1. 心智模型:theme-first

v1 把品牌樣式寫死在每個 wrapper 元件裡;v2 把品牌視覺(色彩、圓角、陰影、字體、各元件外觀)全部定義在**一份 SWAP theme**。這帶來一個重要的使用方式改變:

| | v1 | v2 |
|---|---|---|
| 基礎元件(Button、Pagination…) | 從 `@yosgo/swap-ui` import | **直接從 `@mui/material` import**,掛上 theme 自動長成品牌樣式 |
| SWAP 專屬元件(Modal、Card、TaxTextField…) | 從 `@yosgo/swap-ui` import | 照舊,從 `@yosgo/swap-ui` import |
| 樣式引擎 | JSS(runtime 產生樣式,低階裝置效能瓶頸的主因) | Emotion + CSS variables(靜態化) |

一句話:**swap-ui 只提供 MUI 沒有的東西**;MUI 有的,直接用原生的,同時獲得 MUI 完整文件與生態。

## 2. 前置升級與安裝

### 2.1 依賴

```bash
# 升級 React(v2 需 React >= 18,建議 19)
npm i react@latest react-dom@latest

# 移除 v1 時代的 MUI v4 生態(產品端若有直接安裝)
npm remove @material-ui/core @material-ui/icons @material-ui/lab styled-components

# 安裝 MUI v9 與 emotion
# ⚠️ emotion 是 @mui/material 的「optional peer」,npm 不會自動安裝,漏裝會在 runtime 掛掉(見 §8)
npm i @mui/material @emotion/react @emotion/styled

# 需要 icon 的話
npm i @mui/icons-material

# swap-ui v2(正式 2.0.0 上 latest 前,一律裝 next tag)
npm i @yosgo/swap-ui@next
```

### 2.2 bundler 需求

`SWAPThemeProvider` 內含自托管字體(`@fontsource` 的 CSS import),因此**專案的 bundler 必須支援 import CSS**。Next.js、Vite(React Router 專案的預設)皆原生支援,無需設定;純 tsc/node 環境無法直接使用。

### 2.3 框架接入

**Vite + React Router**(可直接參考 repo 內 `demo/` 完整範例):

```tsx
// src/main.tsx
import { BrowserRouter } from "react-router-dom";
import { SWAPThemeProvider } from "@yosgo/swap-ui";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <SWAPThemeProvider>
      <App />
    </SWAPThemeProvider>
  </BrowserRouter>,
);
```

**Next.js(App Router)**:`SWAPThemeProvider` 是 client component 性質,包一層即可:

```tsx
// app/providers.tsx
"use client";
import { SWAPThemeProvider } from "@yosgo/swap-ui";

export default function Providers({ children }: { children: React.ReactNode }) {
  return <SWAPThemeProvider>{children}</SWAPThemeProvider>;
}
```

```tsx
// app/layout.tsx
import Providers from "./providers";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant">
      <body><Providers>{children}</Providers></body>
    </html>
  );
}
```

## 3. Provider 替換

v1 的 theme 三件組合併成一個 Provider(內含 CssBaseline 與字體):

```tsx
// v1
import { SWAPTheme } from "@yosgo/swap-ui";
<SWAPTheme themeOptions={...}>...</SWAPTheme>

// v2
import { SWAPThemeProvider } from "@yosgo/swap-ui";
<SWAPThemeProvider>...</SWAPThemeProvider>

// v2 需要自訂 theme 時
import { SWAPThemeProvider, createSwapTheme } from "@yosgo/swap-ui";
const theme = createSwapTheme({ /* 你的 ThemeOptions,會 deepmerge 進 SWAP theme */ });
<SWAPThemeProvider theme={theme}>...</SWAPThemeProvider>
```

`createMuiTheme`、`ThemeProvider`、`CssBaseline` 的 re-export 已移除——不要再從 swap-ui import 它們。

另外,產品程式碼中所有殘留的 `@material-ui/core` / `@material-ui/icons` import 必須改為 `@mui/material` / `@mui/icons-material`(MUI 官方有 [codemod](https://mui.com/material-ui/migration/migration-v4/) 可協助 v4→v5 的機械替換,之後 v5→v9 的 import 路徑相同)。

## 4. Import 對照表(v1 全部匯出)

### 4.1 照舊——繼續從 `@yosgo/swap-ui` import,props 沿用 v1

AutoComplete、Banner、Breadcrumb、BreadcrumbItem、Card、CheckBox、CheckBoxList、Chip、CircularProgress、Container、DatePicker、Dropdown、IconButton、Link、MenuItem、Modal、Paper、Progress、RadioButton、RadioList、SegmentedTab、SegmentedTabs、Select、Snackbar、Switch、Tab、TabPanel、Tabs、TaxTextField、TextField、Tooltip、Typography、SWAPLogo、SWAPShare、useBreakpoints、`AutocompleteCloseReason`(型別)、稅務常數(SWAPIncomeTypes、SWAPExpenseTypes、SWAPTaxIncomeLabel、SWAPTaxExpenseLabel、SWAPTaxDescription)

以上**用法不變**,其中少數有行為差異,詳見 §5;所有元件現在同時接受底層 MUI 元件的全部 props 與 `sx` 覆寫(v2 新能力,見 §6)。

### 4.2 改用 `@mui/material`——theme 已內建品牌樣式

| v1(swap-ui) | v2 寫法 | 備註 |
|---|---|---|
| `Button` | `import Button from "@mui/material/Button"` | `variant`(primary/secondary/tertiary/text/black/danger)、`size`、`loading` 全部照舊有效(由 theme 與 MUI 原生提供);**`width`/`minWidth` props 移除 → 改 `sx`**,見 §5.1 |
| `Menu` | `import Menu from "@mui/material/Menu"` | v1 即純轉發,無自訂 props |
| `Pagination` | `import Pagination from "@mui/material/Pagination"` | 品牌樣式由 theme 套用 |
| `Skeleton` | `import Skeleton from "@mui/material/Skeleton"` | v1 即純轉發;圓角 5px 由 theme 套用 |

### 4.3 換新名

| v1 | v2 | 備註 |
|---|---|---|
| `SWAPTheme` | `SWAPThemeProvider` | 見 §3 |
| `createMuiTheme` | `createSwapTheme` | 見 §3 |
| `ThemeProvider`、`CssBaseline` | (併入 `SWAPThemeProvider`) | 不需再自行掛 |
| `Styles`(token 預覽小工具) | `swapColors`、`swapRadius`、`swapShadows`、`swapBreakpoints`、`swapFontFamily` | 直接 import design tokens;色票/圓角/陰影預覽見 Storybook 手冊側欄的「**Design Tokens**」頁(色票點擊可複製色碼) |

### 4.4 已移除(附替代方案)

| v1 | 替代 |
|---|---|
| `AppBar`、`SWAPAppBar` | 寫死的官網導覽列,非通用元件;以 MUI `AppBar`/`Toolbar` 自行組裝 |
| `SWAPModal`、`SWAPDialog` | 早已被 `Modal` 取代;改用 `Modal`(props 見 Storybook 手冊) |
| `SWAPBanner` | 早已被 `Banner` 取代;改用 `Banner` |
| `SWAPSpace` | MUI `Stack`(間距排列)或 `Box`(單一間距) |
| `SWAPCopyField` | `TextField` + `IconButton` + `navigator.clipboard` 自行組合 |
| `SWAPTaxField` | `TaxTextField`(現役版本,照舊匯出) |

## 5. Breaking changes(需要改 code 的)

### 5.1 Button 的 `width` / `minWidth` → `sx`

```tsx
// v1
<Button variant="primary" width="100%" minWidth={120}>送出</Button>

// v2
<Button variant="primary" sx={{ width: "100%", minWidth: 120 }}>送出</Button>
```

其餘 Button props(六種 `variant`、三種 `size`、`loading`)全部照舊。

⚠️ `loading` 請**永遠傳布林**(`loading={isFetching}`),不要條件展開(`{...(isFetching && { loading: true })}`)——`undefined ↔ true` 切換會重組 MUI 的 loading DOM 結構,遇到 Google 翻譯等會修改 DOM 的瀏覽器擴充功能可能 crash([MUI 官方警告](https://mui.com/material-ui/react-button/))。

### 5.2 TextField 預設高度 48px

v1 的 TextField 未設定高度時會塌陷(實際上是 bug);v2 預設高度 48px(`multiline` 不受影響),label 依高度自動垂直置中。若版面依賴 v1 的塌陷高度,傳 `height` 調整。

### 5.3 DatePicker 日曆視覺更新

內部由自製日曆改為 MUI X Date Pickers 的 `DateCalendar`,**外觀與 v1 不同**(更現代的 MUI 風格)。對外介面不變:`format`(year/month/day)、`min`/`max`、`value`、`getValue`、`ModalProps`、`mobile` 照舊,`getValue` 回傳字串格式與 v1 完全一致(`"2026"` / `"2026-7"` / `"2026-7-17"`,不補零)。

### 5.4 MenuItem 的 `button` prop 失效

MUI v4 遺留 prop,v9 已無此概念。型別上保留(標 `@deprecated`)所以既有程式碼不會編譯錯誤,但無任何作用,建議順手移除。

### 5.5 環境需求

- React >= 18(建議 19)、`@mui/material` v9 為 peerDependencies。
- `@emotion/react`、`@emotion/styled` 必須明確安裝(§2.1)。
- bundler 需支援 CSS import(§2.2)。
- Button 等自訂 `variant` 的 TypeScript 型別由 swap-ui 的 module augmentation 提供——專案只要有 import 過 `@yosgo/swap-ui`(掛 Provider 即滿足)就會生效。

## 6. 行為改善(不需改 code,但值得知道)

- **效能(本次遷移的初衷)**:JSS runtime 樣式爆量問題根治;theme 靜態化 + CSS variables,低階裝置不再因樣式重算卡頓。
- **所有 swap-ui 元件都是「薄 wrapper」**:除了 v1 的 SWAP props,底層 MUI 元件的全部 props 都能直接傳入,並可用 `sx` 覆寫任何樣式——客製需求不再需要 fork 元件。
- **尺寸類 props 寬鬆輸入**:`width`/`height` 等接受 `100`、`"100"`、`"100px"`、`"fit-content"` 皆可,不再有「要不要加 px」的問題。
- **Button `loading`** 改用 MUI v9 原生實作,各 variant 的 spinner 顏色正確。
- **AutoComplete 下拉定位修正**:選單不再跑到容器外或蓋住已選內容;`placement` prop 真正生效(v1 有宣告但被忽略)。
- **Modal 動畫**由 react-spring 改為 CSS keyframes,少一個 runtime 依賴。
- 依賴瘦身:styled-components、react-spring、smoothscroll-polyfill 移除。

## 7. 建議遷移步驟(playbook)

1. **升依賴**:照 §2.1 執行(React → 移除 v4 生態 → 裝 MUI 9 + emotion → 裝 `@yosgo/swap-ui@next`)。
2. **換 Provider**:照 §3 替換 app 最外層,先讓專案能跑起來。
3. **全域搜尋替換 import**:
   - `@material-ui/core` → `@mui/material`、`@material-ui/icons` → `@mui/icons-material`
   - 從 swap-ui import 的 `Button`/`Menu`/`Pagination`/`Skeleton` → 改 `@mui/material`(§4.2)
   - `SWAPTheme`/`createMuiTheme` 等 → 新名(§4.3);已移除者照 §4.4 替換
4. **跑 `tsc`,逐一清錯**:Button `width`、移除的匯出等 breaking 幾乎都會被型別抓到;§5 是對照手冊。
5. **逐頁驗證**:重點看表單頁(TextField 高度)、日期選擇(DatePicker 新視覺)、下拉選單(AutoComplete)。
6. 驗證完成前,**產品的 package.json 不要指到 `latest`**;正式 `2.0.0` 發佈後再切換。

## 8. 常見錯誤對照

| 症狀 | 原因 | 解法 |
|---|---|---|
| 畫面全白,console 出現 `Invalid hook call` 或 emotion 相關錯誤 | `@emotion/react`/`@emotion/styled` 沒裝(optional peer 不會自動安裝),或專案裡有兩份 React | `npm i @emotion/react @emotion/styled`;`npm ls react` 確認只有一份 |
| 字體/品牌色沒套用 | `SWAPThemeProvider` 沒包在最外層 | 照 §2.3 掛 Provider |
| TS 報 `variant="primary"` 不存在於 Button | module augmentation 未載入(專案完全沒 import 過 swap-ui) | 至少 import 一次 `@yosgo/swap-ui`(掛 Provider 即滿足) |
| 元件樣式時對時錯、樣式互相打架 | 專案同時殘留 `@material-ui/*`(v4)與 `@mui/material` | 徹底移除 v4 套件後重新安裝 |
| CSS import 報錯(非 Vite/Next 環境) | bundler 不支援 import CSS | 見 §2.2 |

---

各元件的完整 props 與可互動範例,見 [v2 Storybook 手冊](https://yosgo-open-source.github.io/swap-ui/v2/)(每個元件都有 Docs 頁與 Playground);v1 手冊保留於[根路徑](https://yosgo-open-source.github.io/swap-ui/)供對照。
