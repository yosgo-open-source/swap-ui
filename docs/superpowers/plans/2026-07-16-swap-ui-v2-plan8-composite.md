# swap-ui v2 計劃八：B 類組合 wrapper（7 元件）實作計劃

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 遷移 Banner、Card、Progress、RadioList、CheckBoxList、Snackbar、Modal 七個組合型元件（審計裁決：薄 CUSTOM wrapper，props 沿用 v1）。

**Architecture:** 全部遵守 [[swap-ui-wrapper-pattern]] 與 cssSize 慣例。重用已遷移的 swap-ui 元件組合（Card 用 Button/Skeleton、RadioList 用 RadioButton、Snackbar 用 IconButton、Modal 用 Button/Tooltip/Typography/useBreakpoints）。

## Global Constraints

- 批次模式；數值/行為沿用 v1；每元件含 story（分類 title、Playground 正確 argTypes）+ 手冊 MDX + 測試；每 Task commit 前該元件測試 + typecheck 綠。
- **刻意改善（記入 commit 與遷移指南）**：
  - **Modal 移除 react-spring 依賴**：v1 只用它做 200ms 淡入+上移 50px，改用 CSS keyframes/transition 等效實作（少一個 runtime 依賴，效能更好）。
  - Card 的 `Math.random()` key → index；Card 內部間距改 Box（SWAPSpace 已淘汰）。
  - Banner 的 `variant` 語意配色維持自繪（審計裁決「內部用 Alert 實作」但 v1 視覺為自訂 icon+框線+Typography 組合，直接以 Box 忠實重建更精準——Alert 的 DOM/樣式差異大，故維持自繪並於審計備註更新）。

### v1 規格摘要

- **Banner**：圓角 8、padding `12px 16px`、flex；5 variant 配色（normal：black100 底/black500 框；info：primary50/primary200；success：success50/success400；warning：secondary50/secondary600；error：danger50/danger300）；icon 24×24 右距 8（各 variant 預設 SVG：info/normal/error 圓 i、success 圓勾、warning 三角）；文字 caption2；`mobile` 或內容高 >60px 時 align flex-start（mount 時量測）。props：variant、mobile、width、height、icon + BoxProps。
- **Card**：預設寬 350、白底、black500 框、圓角 8、column flex、overflow hidden；body padding 24；底部按鈕列（boxShadow 上緣分隔線 black400、按鈕間右框線、圓角只在底部）；按鈕預設 variant black、fullWidth；`loading` 時 body/按鈕列都換 Skeleton 骨架。props：width、height、buttons[]（title/onClick/variant/loading/disabled/style）、bodyStyle、loading + BoxProps。
- **Progress**：步驟圓 24（可調 size）、字 12/700；目前步：白底/primary800 字/2px primary800 框/focus ring 樣式外圈；完成步：primary800 底白字；未完成：black600 底白字；連接線 2px（完成段 primary800、未完成 black500、首尾透明）；下方 caption1 標籤（目前步 black1000、其餘 black700，上距 8）。props：step、count、label[]、size、width + BoxProps(omit onClick)。
- **RadioList / CheckBoxList**（同構，僅選取控制不同）：可選卡片——圓角 8、置中 space-between；三模式尺寸/padding：預設 327×54/`15px 16px`；multiline 240×69/`12px 16px`（title 下顯示 subtitle）；line 342×76/`16px`（title 56 寬置中 + 1px 直線分隔 + subtitle，直線高隨內容 ≥44 量測）；checked：primary50 底/primary400 框；未選：白底/black500 框、hover black100 底/black600 框；內嵌 RadioButton/CheckBox（disableHover、marginLeft 4）。props：title、subtitle、checked、multiline、line、width、height + BoxProps(omit title)。
- **Snackbar**：MUI Snackbar；content：nowrap、minWidth 320/maxWidth 640、shadow l、圓角 m、padding `12px 16px`；variant 配色（success：success800 底/successA11y 框；error：danger900/dangerA11y；預設 black1000）；≥600px 寬 fit-content 右距 24、<600px 滿版 bottom/left/right 16；message 白字 14/400/1.6、前置 icon（checkIcon 白勾/errorIcon 白 i/自訂 icon，右距 8）；action：revertButton（secondary600 字 14/700，預設文案「收回操作」）+ closeIcon（IconButton，hover 色 variant 對應 success `#006818`/error `#A00204`/預設 `#333333`，白叉 icon）；transitionDirection → Slide 四向/預設 Fade。props 沿 v1。v9：ContentProps→slotProps.content（實作時查證 v9 Snackbar slot 名）。
- **Modal**：MUI Modal + Paper。size 寬：large 800/medium 640/small 480/extraSmall 320（fullScreen 100vw、無 size 100%）；圓角 12（fullWidth 上圓角、fullScreen 0）；進場動畫：一般 = 200ms 淡入+translateY(50→0)（v2 用 CSS keyframes 取代 react-spring）、fullWidth/fullScreen = Slide up 300ms；Head：title（桌機 h6/mobile title）+ helpText（body2_loose black800，上距 4）+ icon/checked(CheckCircle)/failed(Warning)（icon 色走 token 表 → 用 swapTokenMap）+ 右上關閉鈕（32×32 圓角 8、20px 叉、disCloseIcon 隱藏）、padding 依 mobile/disCloseIcon/helpText 檔位（`16px 24px` 等四檔）；head 下 Divider（onExit 時 #6d6d6d，否則 #DADADA）；Body：padding 24/mobile 16（bodyPadding 覆蓋）、自訂細捲軸、fullScreen 高 `calc(100dvh - 146px)`、fullWidth 時 maxHeight 依視窗算（helpText/label 四檔公式沿 v1）、onExit 時鎖捲動+半透明遮罩；Footer：label（18/16 字 700）+ secondaryButton/primaryButton（Button size small，secondary/primary 預設 variant，支援 tooltip/loading/disabled，mobile 直排、buttonFullWidth/footerDisplayColumn 佈局）、`footer` prop 整段替換；捲軸寬補償置中 hack 沿 v1。props 全數沿 v1（見 legacy Modal.types.ts）。v9：BackdropComponent/BackdropProps → slots/slotProps。

---

### Task 1: Banner
**Files:** `src/components/Banner.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`（title `Feedback/Banner`）、`.mdx`；index.ts。
測試：5 variant 底色斷言其一 + 自訂 icon 渲染。commit `feat(component): Banner（5 variant 語意配色/預設 icon，沿用 v1）+ 手冊`。

### Task 2: Card
**Files:** `src/components/Card.tsx` 等五件套（title `Display/Card`）；index.ts。
測試：渲染 children + buttons 點擊直通 + loading 顯示 Skeleton。commit `feat(component): Card（底部按鈕列/loading 骨架，沿用 v1；key 修正）+ 手冊`。

### Task 3: Progress
**Files:** `src/components/Progress.tsx` 等五件套（title `Feedback/Progress`）；index.ts。
測試：count 顆步驟圓、目前步樣式、label 顯示。commit `feat(component): Progress（步驟進度條，沿用 v1）+ 手冊`。

### Task 4: RadioList + CheckBoxList
**Files:** 共用樣式抽 `src/components/selectionList.styles.ts`；`RadioList.tsx`、`CheckBoxList.tsx`、各 types、合併測試、合併 story（title `Inputs/RadioList`、`Inputs/CheckBoxList`）、各 mdx；index.ts。
測試：checked 樣式、點擊直通、三模式渲染。commit `feat(component): RadioList/CheckBoxList（可選卡片三模式，沿用 v1）+ 手冊`。

### Task 5: Snackbar
**Files:** `src/components/Snackbar.tsx` 等五件套（title `Feedback/Snackbar`）；index.ts。
測試：open 顯示 message、revertButton 回呼、variant 配色。commit `feat(component): Snackbar（variant/方向轉場/收回操作，沿用 v1）+ 手冊`。

### Task 6: Modal
**Files:** `src/components/Modal.tsx`、`.types.ts`（沿 v1 全 props）、`.test.tsx`、`.stories.tsx`（title `Feedback/Modal`：基本/雙按鈕/checked/failed/fullWidth/fullScreen/Playground）、`.mdx`；index.ts。
測試：open 渲染 title/children、primaryButton 點擊、onClose（關閉鈕）、disCloseIcon 隱藏關閉鈕。
commit `feat(component): Modal（四檔 size/head-body-footer 組合/CSS 動畫取代 react-spring，沿用 v1）+ 手冊`。

### Task 7: 整批驗證、Chrome MCP 驗收、push
- 全鏈綠（冷啟動誤報重跑）；重啟 storybook。
- Chrome MCP：Modal 開闔動畫/雙按鈕/fullScreen、Snackbar 進場方向、RadioList 勾選態、Card loading、Banner 5 variant；對照 v1 基準截圖；無 console 錯誤。
- push + CI 綠。
- **收尾後接續**：AutoComplete listbox 外框修正（disablePortal 預設，使用者回報）。

---

## 計劃完成的定義
- B 類 7 元件全數完成；react-spring 未被引入 v2。
- 全部含 story + 手冊 + 測試；CI 綠；整批一次 review。
- 剩餘：C 類（SWAPLogo、SWAPShare、TaxTextField+稅務常數、DatePicker→MUI X）→ 計劃九；發佈與遷移指南 → 計劃十。
