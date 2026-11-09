<img src="https://blog.swap.work/wp-content/uploads/2021/02/cropped-SWAP_web-logo-01-2.png" width="150" />

# SWAP UI（v2）

SWAP（[www.swap.work](https://www.swap.work)）的品牌 UI 套件，基於 [MUI v9](https://mui.com/) 全面重構。

**v2 的核心理念是 theme-first**：品牌視覺（色彩、圓角、陰影、字體、各元件外觀）全部定義在一份 SWAP theme 裡——

1. **原生 MUI 元件自動長成品牌樣式**。`import Button from "@mui/material/Button"` 掛上 theme 後就是 SWAP 的六種按鈕，同時擁有 MUI 完整的元件庫與文件。
2. **swap-ui 只提供 MUI 沒有的東西**。品牌資產（SWAPLogo）、組合元件（Modal、Card、Snackbar…）、業務元件（TaxTextField）與 design tokens。
3. **效能**。v1（MUI v4 + JSS）的 runtime 樣式爆量問題在 v2（Emotion + theme 靜態化 + CSS variables）根治。

元件預覽與使用手冊：`npm run storybook` 或瀏覽 <a href="https://yosgo-open-source.github.io/swap-ui/v2/" target="_blank">Storybook</a>（v1 手冊仍在 <a href="https://yosgo-open-source.github.io/swap-ui/" target="_blank">根路徑</a>）（每個元件都有「Docs」使用指南與可互動的 Playground）。

# 安裝

```bash
# peerDependencies（emotion 是 @mui/material 的 optional peer，必須明確安裝）
npm i react react-dom @mui/material @emotion/react @emotion/styled

# swap-ui
npm i @yosgo/swap-ui
```

# 快速開始

App 最外層包一次 `SWAPThemeProvider`（含品牌 theme、CssBaseline 與自托管字體）：

```tsx
import { SWAPThemeProvider } from "@yosgo/swap-ui";

<SWAPThemeProvider>
  <App />
</SWAPThemeProvider>
```

之後：

```tsx
// 一般元件直接用 MUI，樣式由 theme 自動套用
import Button from "@mui/material/Button";
<Button variant="primary" size="large">送出</Button>

// SWAP 專屬元件與 tokens 由 swap-ui 匯出
import { Typography, Modal, SWAPLogo, swapColors } from "@yosgo/swap-ui";
```

# 開發

```bash
npm run storybook        # 元件預覽與手冊（localhost:6006）
npm test                 # 兩層測試：jsdom 單元 + Storybook 瀏覽器互動測試
npm run typecheck        # TypeScript 檢查
npm run build            # 打包（ESM + CJS + d.ts）
```

新元件慣例：實作（`src/components/X.tsx` + `X.types.ts`）＋ story（含 Playground、controls 白名單）＋ 手冊（`X.mdx`）＋ 測試，並於 `src/index.ts` 匯出。詳見 `docs/superpowers/` 內的設計文件與各計劃。

# 發佈（⚠️ 安全規則）

`latest` 指向 v2。不帶 tag 的 `npm publish` 一律會蓋掉 `latest`，因此 v1 hotfix 與預發佈**必須**指定 tag：

```bash
# v2 正式版（從 master 發佈）
npm publish

# v1 hotfix（從 v1 分支發佈）
npm publish --tag v1

# 預發佈（beta/alpha）
npm publish --tag next

# 發佈前後確認 dist-tags
npm dist-tag ls @yosgo/swap-ui
```

# v1 → v2

v1 原始碼封存於 `legacy/v1-src/`（v1 維護分支為 `v1`）。**遷移指南見 [MIGRATION.md](https://github.com/yosgo-open-source/swap-ui/blob/master/MIGRATION.md)**（import 對照表、breaking 清單、Next.js / React Router 接入、常見錯誤對照），Storybook 手冊側欄最上方亦有同步的「遷移指南」頁。
