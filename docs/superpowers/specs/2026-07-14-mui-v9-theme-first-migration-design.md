# swap-ui v2：MUI v9 Theme-First 全面重構設計

日期：2026-07-14
狀態：已與需求方確認（方案 B 全面重構）

## 1. 背景與問題

swap-ui（`@yosgo/swap-ui`）是 SWAP（swap.work）的品牌 UI 元件庫，基於 `@material-ui/core` v4.11 客製，透過 Storybook 提供元件預覽。

現況問題：

- **效能**：MUI v4 的 JSS 是純 runtime 樣式引擎，且元件大量使用「props 函式型」`makeStyles`（全庫 77 處）——每種 props 組合都會動態產生新 stylesheet 注入 DOM。頁面元件一多，低階裝置出現卡頓、渲染爆量、閃退。
- **技術棧全面過時**：React 17、TypeScript 3.7、Rollup 1、Storybook 6、Jest 24，多數依賴已停止維護。
- **主題架構非正規**：自訂 design token（`theme.primary.primary400` 等，全庫引用 783 次）直接掛在 theme 物件上，無型別保障，仰賴 TS 3.7 的寬鬆檢查才能編譯。
- **字體依賴第三方 CDN**（cdn.leafscape.be），有可靠性與效能風險。

## 2. 目標與非目標

### 目標

1. 根治低階裝置的效能問題（消滅 JSS runtime 樣式產生）。
2. 全部依賴升到當前最新版（2026-07-14 查證，見 §5）。
3. 大幅降低長期維護成本：品牌樣式集中於 theme，元件程式碼量大減。
4. 產品端（swap.work）可依明確的遷移指南完成升級。

### 非目標

- 不維持 v1 對外 API 完全相容（需求方已同意全面重構的 breaking change）。
- 不做 v4 / v9 並存的漸進遷移（產品端一次升級到位）。
- 不在本專案內執行產品端遷移（產品 repo 的工作，本專案交付遷移指南）。

## 3. 已確認的決策

| 決策 | 內容 |
|---|---|
| 策略 | 方案 B：theme-first 全面重構，發佈為 `@yosgo/swap-ui@2.0.0` |
| 目標版本 | 一律最新版（MUI v9、React 19、Storybook 10 等） |
| 遷移範圍 | swap-ui 庫 + swap.work 產品端（產品端也直接 import `@material-ui`，主要是 Container / Table / Grid 等佈局元件） |
| 產品端框架 | 未定（Next.js 或 React Router），theme 套件必須 framework-agnostic |
| Breaking change | 可接受（需求方主動選擇全面重構） |

## 4. 架構設計

### 4.1 核心理念

swap-ui v2 不再逐一「包裝」MUI 元件，而是一個**品牌 theme 套件 + 少數真正客製的元件**：

```
@yosgo/swap-ui v2
├── theme/                       ← 套件核心
│   ├── tokens.ts                design tokens（primary50–900、secondary、danger、
│   │                            success、black 色階；圓角；陰影；字體）
│   ├── createSwapTheme.ts       MUI v9 createTheme：styleOverrides + custom
│   │                            variants + cssVariables: true
│   ├── augmentation.d.ts        TS module augmentation：自訂 token 與 variant 型別
│   └── SWAPThemeProvider.tsx    ThemeProvider + CssBaseline + 字體載入
└── components/                  ← 只留 MUI 沒有對應物或含商業邏輯的元件
```

品牌視覺（顏色、圓角、陰影、字體、各元件外觀）全部定義在 SWAP theme；產品端直接使用 `@mui/material` 原生元件，掛上 theme 後自動呈現品牌樣式。

### 4.2 元件去向（初步分類，Phase 0 審計後定案）

**A. 下沉為 theme（刪除元件檔，改用 MUI 原生 + styleOverrides / custom variants）：**
AutoComplete、Breadcrumb、BreadcrumbItem、Button、CheckBox / RadioButton、Chip、CircularProgress、Container、IconButton、Link、Menu / MenuItem / Select、Pagination、Paper、Skeleton、Switch、Tab / Tabs / TabPanel、TextField、Tooltip、Typography。

（2026-07-14 審計後修正：Modal、Snackbar、Card、Progress、RadioList / CheckBoxList 為組合型元件，theme 無法表達組合結構，經使用者裁決改列 B 類「薄 CUSTOM wrapper」；AppBar 實為寫死的官網導覽列，裁決改列 C 類淘汰。詳見 `docs/superpowers/audit/2026-07-14-component-disposition.md`。）

SWAP 特有的 variant（如 Button 的 `primary / secondary / tertiary / text / black / danger` 與 `small / medium / large` 尺寸）以 module augmentation 註冊為 MUI 合法 variant——產品端寫法幾乎不變（`<Button variant="primary">` 照舊），只是 import 來源改為 `@mui/material`。

**B. 保留為客製元件（在 MUI v9 + Emotion 上重寫，props 盡量沿用）：**
SWAPLogo、SWAPShare、TaxTextField（現役使用中）、Banner（內部改用 MUI Alert 實作）、DatePicker（改基於 `@mui/x-date-pickers` 的薄 wrapper）、Dropdown、SegmentedTab / SegmentedTabs。
薄組合 wrapper（底層全用 MUI + theme，對外 props 沿用 v1）：Modal（MUI Dialog）、Snackbar、Card、Progress、RadioList / CheckBoxList。
另保留稅務常數的具名匯出（SWAPTaxDescription、SWAPTaxExpenseLabel、SWAPTaxIncomeLabel、SWAPExpenseTypes、SWAPIncomeTypes）——目前未被使用但維持輸出，移至獨立的 tax 模組。

**C. 淘汰（需求方已確認：SWAP 前綴元件為歷史包袱，均已被同名新版取代）：**
SWAPAppBar、SWAPBanner、SWAPCopyField、SWAPDialog、SWAPModal、SWAPSpace、SWAPTaxField（元件本體；稅務常數匯出如上保留）、LandingPage、AppBar（審計發現為寫死的官網導覽列，使用者裁決淘汰）。
SWAPTheme 元件由 v2 的 `SWAPThemeProvider` + `createSwapTheme` 接替（角色保留、形式改變）。
其餘純轉發、無加值的 wrapper 與死程式碼於審計時逐一判定（候選：Styles 等）。

### 4.3 Design tokens

- 現有色階（primary50–900、secondaryXX、dangerXX、successXX、blackXX、A11y 色）、圓角（s/m/l/xl）、陰影（s/m/l/xl）**完整保留**，數值不變。
- 正式掛入 MUI theme 的型別系統（module augmentation），TypeScript 有完整提示。
- 開啟 MUI v9 的 `cssVariables: true`，token 同步輸出為 CSS variables，減少樣式重算。
- token 另以具名常數輸出（`swapColors`、`swapShadows`…），非 React 環境亦可使用。

### 4.4 效能收益來源

1. JSS runtime 樣式產生全數消失（升級的最大目的）。
2. variant 樣式在 theme 靜態定義，不再依 props 動態產生 stylesheet。
3. Emotion 樣式快取 + CSS variables 減少重算與 re-render。
4. 字體改 @fontsource 自托管，消除第三方 CDN 延遲。

## 5. 技術棧（版本皆於 2026-07-14 經 npm registry / MUI MCP 查證）

| 項目 | 現在 | 升級後 |
|---|---|---|
| UI 基底 | @material-ui/core 4.11 + lab alpha | @mui/material **9.2.0** + @mui/icons-material **9.2.0**（Pagination / Skeleton / Autocomplete 已入 core，不再需要 lab） |
| 樣式引擎 | JSS + styled-components 5 | Emotion 11（@emotion/react **11.14.0**、@emotion/styled **11.14.1**）；styled-components 移除 |
| React | 17 | **19.2.7**（peer range `>=18`） |
| TypeScript | 3.7 | **6.0.3**（Phase 1 實測定版：TS 7.0.2 的原生編譯器不提供 tsup d.ts 產生所需的 JS compiler API，故退階至 6.0.3；語言特性與 7 同步，待 tsup 生態跟上 TS 7 再升） |
| 打包 | Rollup 1 | tsup **8.5.1**（ESM + CJS、自動 d.ts、tree-shakable） |
| Storybook | 6 | **10.5.0**（Vite builder；addon：a11y、docs、mcp） |
| 測試 | Jest 24 + ts-jest | Vitest **4.1.10** + @testing-library/react **16.3.2**（jsdom 單元測試） |
| 字體 | 第三方 CDN @font-face | @fontsource/noto-sans-tc **5.2.9** + @fontsource/m-plus-rounded-1c **5.2.10**，自托管打包 |

### 測試策略（兩層，缺一不可）

1. **jsdom 單元/整合測試（Vitest + RTL）**：Phase 1 已就緒，每個元件的行為斷言跑在此層。
2. **瀏覽器互動測試（`@storybook/addon-vitest`）**：**Phase 2/3 補裝**（使用者 2026-07-15 明確要求）。它把每個 story 的 `play` 互動腳本當成真實瀏覽器測試，進 CI 自動守回歸。Phase 1 暫不裝的原因：(a) 此版本組合有 `aria-query` 相依 bug；(b) 現階段無元件、無 `play` 腳本，裝了是空負擔。待 Phase 2 有真正元件與互動腳本時導入，屆時 aria-query 版本問題預期已隨生態更新解除（若未解，以 npm overrides 釘版本繞過）。
3. **Chromatic 視覺回歸**：暫不採用（使用者裁決）；日後 UI 庫穩定、需像素級雲端把關時再評估。
4. **Chrome MCP 人工驗收**：見 §8.5，負責遷移期間新舊體驗的人在迴圈比對，與上述自動化測試互補。

## 6. 套件對外介面（v2.0.0）

- `SWAPThemeProvider`（內含 CssBaseline、CSS variables、字體）與 `createSwapTheme(options?)`——保留傳入自訂 themeOptions 的能力。
- design tokens 具名輸出。
- 保留的客製元件維持現有名稱，props 盡量沿用（差異記入遷移指南）。
- **移除** `createMuiTheme`、`ThemeProvider`、`CssBaseline` 的 re-export（遷移指南提供替代寫法）。
- peerDependencies：`@mui/material`、`react`、`react-dom`（Emotion 由 @mui/material 依賴自帶）。
- SSR：套件本身 framework-agnostic；文件附 Next.js（@mui/material-nextjs **9.1.1**）與 React Router / 純 SPA 兩種接入指南。

### 6.1 發佈安全規則（保護現役產品）

現役產品端使用 `"@yosgo/swap-ui": "^1.0.142"`，registry 現況 `latest` = 1.0.142，尚無任何 2.x 發佈。以下規則確保 v2 開發與發佈期間，現役產品不會意外升級：

- **caret 範圍天然隔離**：`^1.0.142` = `>=1.0.142 <2.0.0`，永遠不會解析到 2.x，預發佈版（`2.0.0-beta` 等）連 1.x 範圍都不符合。產品端 server 重啟不重裝依賴；重新部署用 `npm ci`（釘 lockfile）或 `npm install`（範圍內最高 1.x）皆碰不到 v2。
- **所有 v2 預發佈一律 `npm publish --tag next`**：npm 預設會把任何版本（含 `2.0.0-beta`）推上 `latest`，導致 `npm install @yosgo/swap-ui`（不帶版本）的新安裝者抓到 beta。發 beta/alpha 一律加 `--tag next`，正式 `2.0.0` 穩定後才發到 `latest`。
- **發版前檢查**：每次 `npm publish` 前確認 `npm dist-tag ls @yosgo/swap-ui`，確保 `latest` 仍指向預期版本。
- 此規則的實作步驟寫入 Phase 4（發佈）計劃。

## 7. 執行階段

| Phase | 內容 | 產出 |
|---|---|---|
| 0 審計與基準 | 盤點全部元件產出去向表；確認各元件 props 與樣式狀態；建置 v1 Storybook 並截圖存檔；記錄低階裝置效能基準 | 元件去向表、視覺基準截圖、效能基準數據 |
| 1 新基礎建設 | 開 v2 分支；tsup + TS 7 + Vitest + Storybook 10 + React 19 空殼專案與 CI；驗證 TS 7 相容性（不行退 6.0 / 5.9） | 可建置、可測試、可跑 Storybook 的空殼 |
| 2 Theme 核心 | tokens → createSwapTheme → augmentation → 逐元件將 v1 樣式翻譯為 styleOverrides + custom variants；cssVariables: true；@fontsource 字體 | theme 套件 + 每個 variant 的 story，與基準截圖比對通過 |
| 3 客製元件重寫 | 保留元件於 MUI v9 重寫；Vitest 單元測試 + story | 全部客製元件 + 測試綠燈 |
| 4 發佈與文件 | `2.0.0-beta`；發佈新 Storybook；撰寫遷移指南（v1 → v2 寫法對照表、兩種框架接入範例） | beta 套件 + 遷移指南 |
| 5 產品端遷移 | （產品 repo）React 19 + MUI 9 + swap-ui v2 一次到位；原生 import 用官方 codemod 轉換；品牌元件按對照表替換；beta 於一至兩頁試點，低階裝置實測達標後全面鋪開 | 產品上線 + 正式 `2.0.0` |

## 8. 驗收標準

1. **視覺**：新舊 Storybook 逐元件對照，品牌觀感（色彩、圓角、陰影、字體）一致（不強求像素級）。
2. **功能**：Vitest 測試全綠；客製元件 props 行為與 v1 相同。
3. **效能**：以 Phase 0 基準對照，低階裝置實測——stylesheet 數量降至常數級；頁面互動不掉幀、不閃退。
4. **DX**：安裝後包一層 `SWAPThemeProvider` 即可用；自訂 variant / token 有完整 TypeScript 提示。
5. **互動實測與新舊體驗比對**：透過 Chrome MCP 同時開啟 v1（gh-pages 成品，重現方法見 baseline/README.md）與 v2 兩版 Storybook，逐元件點擊操作（點按鈕、開 Modal、切 Tab、填表單、調整 controls 面板的 props），確認每個 props 運作正常、無 console 錯誤，且互動體驗（開闔、動畫、鍵盤操作）與 v1 一致或更好。

## 9. 風險與對策

| 風險 | 對策 |
|---|---|
| TypeScript 7（原生編譯器）與 tsup / Vitest / Storybook 的相容性未知 | Phase 1 空殼專案最先驗證；退階選項 6.0.3 / 5.9.3 |
| v1 元件樣式細節繁多（六種 Button variant × 多種狀態），翻譯到 theme 時遺漏 | Phase 0 逐元件記錄全部狀態；story 覆蓋每個 variant × size × 狀態，對照基準截圖 |
| 產品端直接使用 v4 API 的範圍不明 | Phase 4 遷移指南涵蓋官方 codemod 用法；Phase 5 試點先行 |
| MUI v9 個別元件行為差異（如 ButtonBase 事件行為變更） | 以 MUI MCP 逐版遷移文件為準，差異記入遷移指南 |
| React 19 與產品端既有依賴衝突 | 產品端 Phase 5 開始時先做依賴體檢，屬產品 repo 範圍 |

## 10. 遷移指南要點（Phase 4 交付物的骨架）

- import 對照表：`import { Button } from "@yosgo/swap-ui"` → `import Button from "@mui/material/Button"`（variant 寫法不變）。
- `SWAPTheme` → `SWAPThemeProvider`；`createMuiTheme` → `createSwapTheme`。
- 產品端原生 `@material-ui/*` import → `@mui/*`（官方 codemod：`npx @mui/codemod v5.0.0/preset-safe` 起逐版套用）。
- Next.js 與 React Router 的接入範例各一份。
