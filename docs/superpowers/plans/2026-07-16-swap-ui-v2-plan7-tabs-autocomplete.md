# swap-ui v2 計劃七：Tab 家族 + AutoComplete + Dropdown + useBreakpoints（A 類收尾）

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 遷移 Tab、Tabs、TabPanel、SegmentedTab、SegmentedTabs、Dropdown、AutoComplete 七個元件與 `useBreakpoints` hook——A 類（THEME/簡單 wrapper）全部收尾。

**Architecture:** 全部薄 wrapper（遵守 [[swap-ui-wrapper-pattern]]）+ 一個 hook。每元件含 story（分類 title + Playground with 正確 argTypes）+ 手冊 MDX + 測試。

## Global Constraints

- 批次模式（整批一次 review）；數值沿用 v1；每 Task commit 前 typecheck + 該元件測試綠。
- **v9 修正與刻意改善**（記入 commit 與遷移指南）：
  - SegmentedTabs 的 `smoothscroll-polyfill` **不再引入**（v9 目標瀏覽器 Safari 17+ 原生支援），捲動邏輯保留。
  - AutoComplete 的 `fade()` → `alpha()`；`[data-focus="true"]` → `.Mui-focused`；**修掉 v1 在 renderInput 內呼叫 useEffect 的 React 違規**（改為正常 state 追蹤輸入值）。
  - Dropdown/AutoComplete 移除 `getContentAnchorEl`（v9 不存在）。

### v1 規格摘要（實作依據）

- **Tab**：minWidth/minHeight/padding 0、margin 預設 `0 12px`、字 14/700/lh1.4、文字色 black700、hover 黑；label 外包 indicator 容器（預設 56×56 置中，`width`/`height` 可調）；`selected` 時底部 4px primary400 圓角上緣指示條（`noIndicator` 隱藏、`animation` 時 300ms 從 0 寬展開）；disableRipple。props：selected、width、height、margin、fontSize、noIndicator、animation。
- **Tabs**：MUI Tabs、indicator 透明（指示條由 Tab 自己畫）。
- **TabPanel**：自製 show/hide：`hidden={value !== index}`、`role="tabpanel"`、id/aria 沿 v1 命名。props：value、index、children。
- **SegmentedTab**：pill tab——textTransform unset、padding `12px 16px`、minHeight 預設 40、width 預設 fit-content、字 14/700、色 `#6F6F6F`、hover 黑、nowrap；text zIndex 5（讓 slide 指示墊底）。props：width、height、fontSize、flex。
- **SegmentedTabs**：外框 `1px solid #cccccc`、圓角 9、padding `4px 0`；內部 button 圓角 8、margin `0 4px`；selected：`slide` 時由 indicator 當滑動底（高 100%、primary50、圓角 8）、否則按鈕自己 primary50 底；selected 文字 primary500；scrollButtons 寬 32（disabled 時 4）；scrollable 時初次載入將 selected tab 捲進視野（smooth、delay 1000ms）。props：width、slide。
- **Dropdown**：FormControl(outlined，寬預設 100%) + Select + FormHelperText；外框 black500、hover/focus black1000（icon 同步）；輸入區高度自適應：height≥56 → padding `19px 8px 19px 24px`/字 16/lh 18px，否則 `12px 4px 12px 16px`/字 14/lh 15.75px；字重 700 色 black800、hover/focus 變黑白底；icon 20×20 black800 marginTop 2；menu paper marginTop 8。props：width、height、helperText、helperTextStyle、formControlStyle、inputProps、MenuProps + MUI SelectProps。
- **AutoComplete**：常開 Popper（border #CCCCCC、shadow m、圓角 8、寬預設 320、zIndex 1301、位置由 anchorOrigin 調 margin，預設 top -65）內含 title 標頭（caption1/black800）+ Autocomplete(open)；自訂 InputBase（底線分隔、input 13px padding 圓角 8、focus 藍框光圈 alpha(primary,0.25)）；option 14/700 黑、`aria-selected` 隱藏、focus 時 primary50 底/primary800 字；listbox 自訂細捲軸（5px、black600）；`value` 有值時顯示已選面板（藍字+藍勾、inset 底線）；無選項時顯示「無此選項」+（非 disableFreeInput 時）「使用 『輸入值』」連結 → `handleNoOptionsValueChange(輸入值)`。props 沿 v1（open、anchorEl、title、placeholder、width、optionsMaxHeight、anchorOrigin、disableFreeInput、addNewOptionsText、noOptionsText、handleNoOptionsValueChange、value、renderInput/renderOption/getOptionLabel…）。`AutocompleteCloseReason` 型別改自 `@mui/material` re-export。
- **useBreakpoints**：`useMediaQuery("(min-width:<value>px)")`，斷點名 xxs 0/xs 375/sm 576/md 768/lg 992/xl 1200/xxl 1400 或任意數字——用 `swapBreakpoints` token。

---

### Task 1: useBreakpoints hook

**Files:** Create `src/hooks/useBreakpoints.ts`、`src/hooks/useBreakpoints.test.tsx`；Modify `src/index.ts`

```ts
import useMediaQuery from "@mui/material/useMediaQuery";
import { swapBreakpoints } from "../theme/tokens";

export default function useBreakpoints(
  breakpoint?: keyof typeof swapBreakpoints | number,
): boolean {
  const px = typeof breakpoint === "number" ? breakpoint : swapBreakpoints[breakpoint ?? "xxs"];
  return useMediaQuery(`(min-width:${px}px)`);
}
```

測試：renderHook 斷言回傳 boolean；匯出 `useBreakpoints`。commit `feat(hook): useBreakpoints（沿用 v1 斷點語意，數值取自 tokens）`。

### Task 2: Tab + Tabs + TabPanel

**Files:** Create `src/components/Tab.tsx`、`Tabs.tsx`、`TabPanel.tsx`、各 `.types.ts`、合併測試 `Tab.test.tsx`、`Tab.stories.tsx`（三者同一 story 檔展示組合）、`Tab.mdx`；Modify `src/index.ts`

- 依規格摘要實作（Tab 的 keyframes 用 emotion `@keyframes` 或 sx `"@keyframes selected"`）。
- 測試：Tabs+Tab 組合渲染、點擊切換 value 直通、TabPanel show/hide。
- story title `Navigation/Tab`；Playground argTypes 明確。
- commit `feat(component): Tab/Tabs/TabPanel（自繪選中指示條/動畫，沿用 v1）+ 手冊`。

### Task 3: SegmentedTab + SegmentedTabs

**Files:** Create `src/components/SegmentedTab.tsx`、`SegmentedTabs.tsx`、`.types.ts`×2、`SegmentedTabs.test.tsx`、`SegmentedTabs.stories.tsx`、`SegmentedTabs.mdx`；Modify `src/index.ts`

- slide 模式（indicator 滑動底）與非 slide 模式都要 story。
- 不引入 smoothscroll-polyfill；scrollIntoView 邏輯保留（ref + useEffect）。
- commit `feat(component): SegmentedTab(s)（分段切換/slide 滑動底，沿用 v1；移除 smoothscroll polyfill）+ 手冊`。

### Task 4: Dropdown

**Files:** Create `src/components/Dropdown.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`；Modify `src/index.ts`

- 高度自適應兩檔樣式照規格；MenuProps 與使用者傳入合併（sx 陣列合併原則）。
- commit `feat(component): Dropdown（高度自適應字級/內距，沿用 v1）+ 手冊`。

### Task 5: AutoComplete

**Files:** Create `src/components/AutoComplete.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`；Modify `src/index.ts`

- v9 修正三項（alpha/Mui-focused/移除 useEffect hack——輸入值改由 InputBase onChange 存 state）。
- `export { AutocompleteCloseReason }`（型別自 @mui/material）。
- 測試：開啟 popper 渲染選項、點選觸發 onChange、無選項時顯示「使用」連結並回呼。
- commit `feat(component): AutoComplete（常開 Popper 選單/自由輸入流程，沿用 v1；修 renderInput useEffect 違規）+ 手冊`。

### Task 6: 整批驗證、Chrome MCP 驗收、push

- 全鏈綠（冷啟動誤報重跑）；重啟 storybook。
- Chrome MCP：Tab 指示條動畫、SegmentedTabs slide 切換、Dropdown 開單、AutoComplete 選項 hover/自由輸入連結；無 console 錯誤。
- push + CI 綠。

---

## 計劃完成的定義

- A 類 22 元件全數完成；`useBreakpoints` 匯出。
- 全部含 story（正確 argTypes 的 Playground）+ 手冊 + 測試；CI 綠。
- 下一步：計劃八起進 B 類組合 wrapper（Modal、Snackbar、Card、Progress、RadioList、CheckBoxList、Banner）。
