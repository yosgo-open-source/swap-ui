# swap-ui v1 元件審計表（2026-07-14）

依據：`src/index.ts` 的 57 個公開匯出（完整性驗證見計劃一 Task 1 Step 3）。
去向代碼：**THEME**=下沉為 theme variant/styleOverrides、**CUSTOM**=保留為客製元件重寫、**DROP**=淘汰、**EXPORT**=非元件，保留具名匯出。

分類衝突（審計發現與設計文件 §4.2 不一致者）標記 ⚠️ 並彙整於文末，待使用者裁決。

## 品牌基礎

| 匯出 | 去向 | MUI v9 對應 | v1 props（自訂部分） | 樣式維度 | 備註 |
|---|---|---|---|---|---|
| SWAPTheme | THEME | `createTheme` + `ThemeProvider` | themeOptions、children | 全域：palette、typography、overrides(MuiCard/MuiPaper/MuiOutlinedInput/MuiFormHelperText/MuiIconButton)、@font-face×4 | v2 由 `SWAPThemeProvider`+`createSwapTheme` 接替（已定案） |
| createMuiTheme | DROP | `createSwapTheme` | — | — | re-export 移除（已定案） |
| ThemeProvider | DROP | 併入 `SWAPThemeProvider` | — | — | 同上 |
| CssBaseline | DROP | 併入 `SWAPThemeProvider` | — | — | 同上 |
| Styles | DROP | Storybook token 文件頁 | color、borderRadius、boxShadow、cobyText | token 色票/圓角/陰影預覽 + 點擊複製 | 設計文件預覽小工具，非產品元件；v2 Storybook 的 token 展示頁取代 |
| useBreakpoints | EXPORT | `useMediaQuery` + `theme.breakpoints` | breakpoints("xxs"–"xxl"\|number) | — | **自訂斷點值**：xxs 0 / xs 375 / sm 576 / md 768 / lg 992 / xl 1200 / xxl 1400（非 MUI 預設！必須寫入 v2 theme.breakpoints） |

## 一般元件（THEME 候選）

| 匯出 | 去向 | MUI v9 對應 | v1 props（自訂部分） | 樣式維度 | 備註 |
|---|---|---|---|---|---|
| Button | THEME | `Button` | variant(primary/secondary/tertiary/text/black/danger)、size(s/m/l)、loading、width、minWidth | 6 variant × 3 size × (default/hover/active/focus-visible/disabled) + loading 態（雙 CircularProgress 疊加） | v9 Button 原生有 `loading` prop，loading UI 可簡化；textTransform unset |
| Typography | THEME | `Typography` | variant（d1–d4、h1–h6、title、subtitle、body1/2、caption1/2、small1/2、tiny1/2、button_l/s ＋ `_loose` 系列，共 30+）、color（60+ token 名）、mode("dark") | 30+ 字級 variant；color 對應全部 design token | 自訂 variant 以 typography augmentation 註冊；color prop 的 token 對應方式計劃二設計（sx 或薄 wrapper） |
| Container | THEME | `Container` | maxWidth(lg/xl/xxl/number)、padding(xxs/xs/sm/md/number) | 尺寸階層，無互動態 | xxl=1400 需 theme.breakpoints 支援 |
| TextField | THEME | `TextField` | width、height | focus、-webkit-autofill | outlined 固定樣式、圓角 8px |
| CheckBox | THEME | `Checkbox`+`FormControlLabel` | label、labelPlacement、disableHover | default/hover/checked/disabled | |
| RadioButton | THEME | `Radio`+`FormControlLabel` | label、labelPlacement、disableHover | default/hover/checked/disabled | |
| Select | THEME | `TextField select` / `Select` | ⚠️ 自訂 props 極多：vertical/horizontal/transformOrigin/placeholderStyle/selectStyle/dropdown/paddingLeft… | focus/hover/開闔 | ⚠️ props 面大，計劃二需細審取捨（部分對應 MUI MenuProps/slotProps） |
| Menu | THEME | `Menu` | 無（純轉發） | — | 直接淘汰 wrapper |
| MenuItem | THEME | `MenuItem` | width、height、hover 三色、rippleColor、iconChildren | focus/hover | hover 色 props 改 sx/theme |
| Tab | THEME | `Tab` | width/height/margin/fontSize/noIndicator/animation | selected/hover | |
| Tabs | THEME | `Tabs` | 無實質自訂 | — | |
| TabPanel | THEME | `@mui/lab TabPanel` 或 28 行自寫 | value/index | — | lab v9 尚在 beta（9.0.0-beta.6），計劃二決定用 lab 或自寫 |
| Snackbar | CUSTOM | `Snackbar` | ⚠️ variant(success/error)、transitionDirection、revertButton、closeIcon、icon、checkIcon、errorIcon | 2 variant × 進場方向 | ✅ 裁決：薄 CUSTOM wrapper（底層 MUI Snackbar + theme，props 沿用 v1） |
| Modal | CUSTOM | `Dialog` | ⚠️ 849 行、20+ props：size(4 檔)、primaryButton/secondaryButton(含 tooltip/loading)、icon、fullScreen、dvh 修正… | 4 size × mobile/desktop × fullScreen + 按鈕組合 | ✅ 裁決：CUSTOM（MUI Dialog 上的薄組合層，props 沿用 v1） |
| Banner | CUSTOM | 內部用 `Alert` 實作 | variant(info/normal/success/warning/error)、mobile、icon | 5 variant | ✅ 裁決：CUSTOM，內部映射 Alert severity，props 沿用 v1 |
| Chip | THEME | `Chip` | variant(neutral/primary/success/danger)、outlined、contained、icon | 4 variant × outlined/contained | v1 實作基於 Box 而非 MuiChip，樣式簡單 |
| CircularProgress | THEME | `CircularProgress` | dark、size、thickness | dark/light | 50 行，純轉發+配色 |
| Pagination | THEME | `Pagination`（v9 core） | 透傳 lab PaginationProps | hover/selected | |
| Tooltip | THEME | `Tooltip` | dark、light、arrow、margin×4、width | dark/light 兩配色 | |
| Progress | CUSTOM | ⚠️ 無直接對應（step/count 步驟進度條） | step、count、label[]、size | 完成/進行中/未完成 三態 | ✅ 裁決：薄 CUSTOM（步驟進度條） |
| AutoComplete | THEME | `Autocomplete`（v9 core） | ⚠️ helperText、placement、disableFreeInput、optionsMaxHeight、addNewOptionsText… | focus/hover/開闔 | ⚠️ props 面大（278 行），計劃二細審（多數可對應 v9 slotProps） |
| Skeleton | THEME | `Skeleton`（v9 core） | 無（純轉發） | — | 直接淘汰 wrapper |
| Dropdown | CUSTOM | 基於 `Select` 重寫 | width、height、helperText、helperTextStyle、formControlStyle | focus-visible/hover | 設計文件 §4.2 B（審計確認：與 Select 功能部分重疊，計劃二一併細審是否合併） |
| RadioList | CUSTOM | ⚠️ 無直接對應（可選卡片列） | title、subtitle、checked、line、multiline | checked/hover | ✅ 裁決：薄 CUSTOM（Radio+文字卡片組合） |
| CheckBoxList | CUSTOM | ⚠️ 同上 | 同 RadioList | checked/hover | ⚠️ 同上 |
| IconButton | THEME | `IconButton` | width、height、hoverIconColor、hoverColor（token 名或任意色） | default/hover | hover 色 props 改 sx/theme |
| Link | THEME | `Link` | color（60+ token 名） | default/hover/visited | color→token 對應同 Typography |
| Paper | THEME | `Paper` | width、height(必填) | — | v1 已有 MuiPaper overrides（邊框、圓角、elevation8 陰影），搬入 v2 theme |
| Switch | THEME | `Switch` | 無（純轉發） | checked/disabled/focus-visible | v1 有 focus-visible 樣式 |
| Breadcrumb | THEME | `Breadcrumbs` | separator、maxItems | — | 158 行含展開邏輯，對應 MUI 原生能力 |
| BreadcrumbItem | THEME | `Link` | last | last 態變色 | 22 行薄殼 |
| Card | CUSTOM | `Card` | ⚠️ buttons[]（含 variant/loading/disabled）、loading、bodyStyle | loading 態 + 按鈕列 | ✅ 裁決：薄 CUSTOM（按鈕列+loading 遮罩組合）；MuiCard overrides（18px 圓角）搬入 theme |
| AppBar | DROP | — | 無（空 props 介面） | — | 756 行**寫死的 SWAP 官網導覽列**，非通用元件；✅ 使用者裁決 DROP（產品自行組裝 MUI AppBar） |

## 客製元件（CUSTOM，已定案）

| 匯出 | 去向 | MUI v9 對應 | v1 props | 樣式維度 | 備註 |
|---|---|---|---|---|---|
| SWAPLogo | CUSTOM | 無 | business、dark、size、chinese、black、iconOnly、width、height | dark/黑白/中英/純圖示 組合 | styled-components → emotion；SVG 資產隨遷 |
| SWAPShare | CUSTOM | 無 | url、emailSubject、sharedContent、size | — | 依賴 react-share（計劃三查證其 React 19 相容性） |
| TaxTextField | CUSTOM | 無 | onChange(TaxFiledValueProps)、code/domain 各自 value/error/helperText/focused、mobile | focus/error | 538 行稅務邏輯，現役使用中 |
| DatePicker | CUSTOM | `@mui/x-date-pickers` | format(year/month/day)、min/max、value、getValue、ModalProps、mobile | 選取/今日/停用日期 | ✅ 裁決：改用 MUI X Date Pickers（版本於計劃三動工時查證），薄 wrapper 沿用 v1 props（format→views） |
| SegmentedTab | CUSTOM | 候選 `ToggleButton` | width/height/fontSize/flex | selected/hover | 計劃二評估以 ToggleButtonGroup + theme 表達 |
| SegmentedTabs | CUSTOM | 候選 `ToggleButtonGroup` | width、slide | slide 動畫 | 同上 |

## 淘汰（DROP，已定案）

| 匯出 | 備註 |
|---|---|
| SWAPAppBar | SWAP 前綴歷史包袱（使用者確認） |
| SWAPBanner | 同上，已被 Banner 取代 |
| SWAPCopyField | 同上 |
| SWAPDialog | 同上，已被 Modal 取代 |
| SWAPModal | 同上，已被 Modal 取代 |
| SWAPSpace | 同上（間距改用 MUI `Stack`/`Box` + spacing） |
| SWAPTaxField | 元件本體淘汰；稅務常數匯出保留（見下） |
| AutocompleteCloseReason | 型別 re-export，v2 由 `@mui/material` 直接取得 |
| （LandingPage） | **未在 index.ts 匯出**，屬死程式碼，隨 v1 封存（使用者已確認用不到） |
| （Table） | **未在 index.ts 匯出**（src/Table 存在且有 story，但從未公開），死程式碼隨 v1 封存；產品端用 MUI 原生 Table |

## 保留匯出（EXPORT，非元件）

稅務常數/對照表，目前產品未用但維持輸出（使用者確認），v2 移至獨立 tax 模組與 TaxTextField 同住：

| 匯出 | 備註 |
|---|---|
| SWAPTaxDescription | 稅務說明文案對照 |
| SWAPTaxExpenseLabel | 執行業務（費用）代號標籤 |
| SWAPTaxIncomeLabel | 所得類別代號標籤 |
| SWAPExpenseTypes | 費用代號清單 |
| SWAPIncomeTypes | 所得代號清單（9A/9B/50） |

## 分類裁決紀錄（2026-07-14 使用者裁決）

1. **AppBar** → DROP（寫死的官網導覽列，非通用元件）。
2. **Modal、Snackbar、Card、RadioList、CheckBoxList、Progress** → **薄 CUSTOM wrapper**：底層全用 MUI + theme，對外 props 沿用 v1，產品端繼續從 swap-ui import、用法不變。
3. **Banner** → CUSTOM，內部用 MUI Alert 實作，props 沿用 v1。
4. **DatePicker** → 改用 `@mui/x-date-pickers` + 薄 wrapper 沿用 v1 props。
5. **Select / AutoComplete / Dropdown**：自訂 props 面大且三者功能重疊，計劃二逐 prop 細審（對應 v9 slotProps 或裁撤）——未裁決，屬計劃二工作。

其餘技術要點（不需裁決，計劃二直接吸收）：自訂斷點值（xs 375/sm 576/md 768/lg 992/xl 1200/xxl 1400）必須寫入 v2 theme；Button 的 loading 可用 v9 原生 `loading` prop；Typography 30+ 自訂字級 variant 以 typography augmentation 註冊。
