# swap-ui v2 計劃九：C 類客製元件（4 元件 + 稅務常數）實作計劃

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 遷移 SWAPLogo、SWAPShare、TaxTextField（+ 稅務常數模組）、DatePicker（改基於 MUI X）——元件遷移全部收尾。

**Architecture:** SWAPLogo/SWAPShare 為品牌資產元件（styled-components → emotion，SVG 資產隨遷）；稅務常數抽成獨立 `src/tax/` 模組；TaxTextField 忠實移植（重用已遷移的 AutoComplete/MenuItem/TextField + 稅務常數）；DatePicker 依裁決改為 `@mui/x-date-pickers` 薄 wrapper（v1 props 沿用，`format` → views 對應）。

## Global Constraints

- 批次模式；每元件含 story + 手冊 MDX + 測試 + Playground（controls.include 白名單慣例）；commit 前 typecheck（**檢查 exit code，勿 pipe 吃掉**）+ 該元件測試綠。
- **依賴（已查證 2026-07-16）**：`react-share` **5.3.0**（peer 支援 React 19 ✓，dependencies）；`@mui/x-date-pickers` **9.9.0** + `dayjs`（x-date-pickers 的 peer；兩者為 dependencies；dayjs 版本安裝時查證）。
- tsup 需處理 SVG：`loader: { ".svg": "dataurl" }`；`src/global.d.ts` 補 `declare module "*.svg"`。
- **v1 相容注意**：DatePicker 的 `getValue` 字串格式沿 v1（year `"YYYY"`、month `"YYYY-M"` 不補零、day `"YYYY-M-D"` 不補零）；視覺改為 MUI X 日曆（裁決接受，記入遷移指南）。

### v1 規格摘要

- **SWAPLogo**：8 個 SVG 資產（一般/深色/黑/黑深色/BIZ 英/BIZ 中/icon 藍/icon 白）；props：business、chinese、black、iconOnly、dark、size("small"|"middle"|"large"|number|string)、width、height。高度映射：一般 30/40/48（small/middle/large）、business 48/72/81；數字→px、字串原樣、無值→100%（business 42px）。選圖優先序：business(chinese?) > black(iconOnly?/dark?) > iconOnly > dark > normal。
- **SWAPShare**：40px 高一列三顆分享鈕（Messenger 自製 fb-messenger:// 深連結、LINE 用 react-share LineShareButton、Email 自製 mailto）；props：url（預設當前頁）、emailSubject、sharedContent、size。三顆 icon 為 40×40 inline SVG（灰底圓角方塊）。
- **稅務常數**（自 SWAPTaxField 447–656 行原樣抽出）：`SWAPIncomeTypes`（9A/9B/50）、`SWAPExpenseTypes`（code/source/label/expenseRatio 陣列）、`SWAPTaxIncomeLabel(code)`、`SWAPTaxExpenseLabel(code)`、`SWAPTaxDescription(income, expense)`。型別 `IncomeCodeProps`/`ExpenseCodeProps` 自 TaxTextField.types 沿用。
- **TaxTextField**（538 行忠實移植）：兩欄位（所得類別 code、執行業務類別 domain）各掛一個 AutoComplete 選單；業務規則：9A/9B 才有費用類別（選項依 source 過濾）、50 薪資無費用類別；選定後組 `TaxFiledValueProps`（含 label/description/expenseCodeAndLabel）回呼 onChange；props 沿 v1（codeValue/domainValue/domainCodeValue/各 error/helperText/focused/onClick/mobile）。
- **DatePicker**（MUI X wrapper）：props 沿 v1——format("year"|"month"|"day")→ DateCalendar views（year→["year"]、month→["year","month"]、day→["year","month","day"]）；min/max→minDate/maxDate（dayjs）；value/defaultValue（字串解析）；getValue 回 v1 格式字串；open/onClose/ModalProps → 內容包在 swap-ui Modal；mobile 直通 Modal。

---

### Task 1: 依賴安裝 + SVG 支援
`npm i react-share @mui/x-date-pickers dayjs`（存 dependencies；版本以安裝結果為準記入 commit）；tsup.config 加 svg loader；global.d.ts 補 `declare module "*.svg"`。驗證 build 綠。commit `build: react-share/@mui/x-date-pickers/dayjs 依賴 + SVG 資產支援`。

### Task 2: 稅務常數模組
**Files:** `src/tax/constants.ts`（447–656 行原樣搬移 + 型別）、`src/tax/constants.test.ts`、index.ts 匯出五個符號 + 型別。
測試：IncomeTypes 三筆、ExpenseLabel("10")="律師"、Description 組字。commit `feat(tax): 稅務常數模組（SWAPIncomeTypes 等五匯出，自 SWAPTaxField 抽出）`。

### Task 3: SWAPLogo
**Files:** SVG 資產複製至 `src/components/assets/`；`SWAPLogo.tsx`（Box + img，size 映射函式化）、`.types.ts`、`.test.tsx`（選圖優先序 3 案）、`.stories.tsx`（title `Display/SWAPLogo`，變體矩陣）、`.mdx`；index.ts。
commit `feat(component): SWAPLogo（8 資產/尺寸映射，沿用 v1；styled-components→emotion）+ 手冊`。

### Task 4: SWAPShare
**Files:** `SWAPShare.tsx`（三鈕忠實，inline SVG 原樣）、`.types.ts`、`.test.tsx`（渲染三鈕 + email 連結組字）、`.stories.tsx`（title `Display/SWAPShare`）、`.mdx`；index.ts。
commit `feat(component): SWAPShare（Messenger/LINE/Email 分享，沿用 v1）+ 手冊`。

### Task 5: TaxTextField
**Files:** `TaxTextField.tsx`（忠實移植，用 v2 AutoComplete/MenuItem/TextField + tax 常數）、`.types.ts`（沿 v1）、`.test.tsx`（選 9A→出現費用欄、選 50→無費用欄、onChange 值組裝）、`.stories.tsx`（title `Inputs/TaxTextField`）、`.mdx`；index.ts。
commit `feat(component): TaxTextField（所得/費用類別連動，沿用 v1）+ 手冊`。

### Task 6: DatePicker
**Files:** `DatePicker.tsx`（swap-ui Modal + LocalizationProvider(AdapterDayjs) + DateCalendar；format→views；getValue v1 格式）、`.types.ts`（沿 v1）、`.test.tsx`（開啟顯示日曆、選日回呼格式）、`.stories.tsx`（title `Inputs/DatePicker`：day/month/year）、`.mdx`（註明視覺改 MUI X）；index.ts。
commit `feat(component): DatePicker（改基於 @mui/x-date-pickers，props 沿 v1）+ 手冊`。

### Task 7: 整批驗證、Chrome MCP 驗收、push
全鏈綠（冷啟動誤報重跑）→ 重啟 storybook → Chrome MCP（SWAPLogo 變體、SWAPShare 三鈕、TaxTextField 連動選單、DatePicker 三種 format 開選）→ push + CI 綠。

---

## 計劃完成的定義
- **全部元件遷移完成**：v1 保留清單 100% 落地（35+ 匯出）。
- 全鏈綠 + CI 綠；整批一次 review。
- 剩餘：計劃十（beta 發佈 `--tag next` + 遷移指南 + README）。
