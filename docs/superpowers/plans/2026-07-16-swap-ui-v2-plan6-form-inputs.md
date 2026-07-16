# swap-ui v2 計劃六：表單輸入類（7 元件）實作計劃

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** 遷移 TextField、CheckBox、RadioButton、Switch、Select、MenuItem 六個表單元件（皆薄 wrapper）；Menu 為 v1 純轉發，依審計淘汰 wrapper（產品直接用 `@mui/material/Menu`，於 MenuItem 手冊註明）。

**Architecture:** 全部遵守 [[swap-ui-wrapper-pattern]]（extends MUI props + forwardRef + sx 陣列合併 + rest 直通）。TextField/Select 的深層 slot 樣式（input、label、helper）以 **sx 巢狀 class 選擇器**（`& .MuiOutlinedInput-root` 等）表達，避免佔用 slotProps（留給產品端直通）。CheckBox/RadioButton 用自訂 icon span（v1 的 24px 方塊/圓形 + 品牌藍勾選）。v9 差異：`getContentAnchorEl` 已移除（直接刪）；`$checked` 引用改 `.Mui-checked` 選擇器。

**Tech Stack:** 同計劃四/五。

## Global Constraints

- **批次模式**：整批做完一次 review；每元件獨立 commit；Chrome MCP 驗收一次。
- **數值一字不改**（來源 `legacy/v1-src/`）。focus ring 一律 `0px 0px 0px 4px #D7DFF8`（同 Button）。
- 每元件：實作 + story（title 用 `Inputs/<名>`）+ 手冊 MDX + 測試（至少渲染 + 一條行為/直通斷言）。
- 每 Task commit 前 typecheck + 該元件測試綠；Task 7 全鏈 + 瀏覽器測試（冷啟動轉紅重跑確認）。

### v1 規格摘要（實作依據）

- **TextField**：outlined；輸入區 `padding 0 16px`、白底、字 16/400；fieldset 邊框 black500、legend 寬 0.01px（label 浮邊框上）；focus：ring + primary400 邊框（error 時無 ring、danger800 邊框）；error：danger800 邊框；placeholder black700；autofill 白底；label shrink：`translate(14px,-10px)`、白底、字 14/700/black800（error 同色）；helper 縮排 16。props：width、height（injected 進輸入區）。
- **CheckBox / RadioButton**：40×40 點擊區、hover 底 black300（`disableHover` 關閉）；icon 24×24（Checkbox 圓角 4／Radio 圓形）、白底、black500 框、input hover 變 black1000 框、focus-visible ring、disabled opacity 0.4；checked：primary400 底、primary600 框（hover primaryA11y）、白勾 SVG（Radio 白圓點）；FormControlLabel 包裝、`label`/`labelPlacement`、marginRight 0；disableFocusRipple + disableTouchRipple。
- **Switch**：40×24、padding 0；thumb 20×20 白、陰影 `0 2px 2px rgba(0,0,0,0.15)`；track 圓角 12、black800 框、black600 底（hover black800）；checked：位移 16px、track primary400 底 primary800 框（hover primary600）；checked thumb 內含藍勾 SVG（Fade 200ms）；disabled：track black600/框 black800、整體 opacity 0.4；外層 div `tabIndex=0`、focus-visible ring。
- **Select**：FormControl(outlined) + InputLabel(placeholder 當 label) + Select + FormHelperText 組合。寬預設 100%；輸入區 padding `12px 16px`（可用 paddingTop/paddingLeft 覆蓋）；外框 black500、hover/focus black1000（icon 同步變色）；select 字 16/400 color black800（`dropdown` 模式 14/700）；label shrink 白底字 12/700/black800；menu marginTop 8、anchorOrigin 由 `vertical`/`horizontal` props 控制；v1 props 全數保留（value/onChange/placeholder/helperText/error/width/height/open/…styles）。
- **MenuItem**：字 14/700；hover：底 primary50、字 primary800、svg path fill primary800（三者可用 hoverBackgroundColor/hoverFontColor/hoverIconColor 覆蓋）；focus 底 unset；width/minHeight props；`iconChildren` 置尾（ListItemIcon justify-end）；rippleColor 上色 span。
- **Menu**：v1 純轉發 → 不匯出；手冊註明用 `@mui/material/Menu`。

---

### Task 1: TextField

**Files:** Create `src/components/TextField.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`；Modify `src/index.ts`

**Interfaces:** `TextFieldProps extends Omit<MuiTextFieldProps, "variant">` + `width?`、`height?`。內部固定 `variant="outlined"`。

- [ ] 測試（渲染 + error 邊框 + props 直通）：

```tsx
import { render, screen } from "@testing-library/react";
import { SWAPThemeProvider } from "../theme/SWAPThemeProvider";
import TextField from "./TextField";

const r = (ui: React.ReactElement) => render(<SWAPThemeProvider>{ui}</SWAPThemeProvider>);

test("渲染 label 與輸入", () => {
  r(<TextField label="姓名" placeholder="請輸入" />);
  expect(screen.getByLabelText("姓名")).toBeInTheDocument();
});

test("onChange 直通", async () => {
  const fn = vi.fn();
  r(<TextField label="n" onChange={fn} />);
  const input = screen.getByLabelText("n");
  const { default: userEvent } = await import("@testing-library/user-event");
  await userEvent.type(input, "a");
  expect(fn).toHaveBeenCalled();
});
```

（需 `npm i -D @testing-library/user-event`——查證最新版後裝。）

- [ ] 實作 `.tsx`（sx 巢狀選擇器表達 v1 全部狀態）：

```tsx
import * as React from "react";
import MuiTextField from "@mui/material/TextField";
import { swapColors as c } from "../theme/tokens";
import type { TextFieldProps } from "./TextField.types";

const TextField = React.forwardRef<HTMLDivElement, TextFieldProps>(function TextField(
  { width, height, sx, ...rest },
  ref,
) {
  const ourStyles = {
    "& .MuiFormHelperText-root": { marginLeft: "16px", marginRight: "16px" },
    "& .MuiOutlinedInput-root": {
      width: width ?? undefined,
      height: height ?? undefined,
      padding: "0px 16px",
      backgroundColor: "white",
      fontSize: 16,
      fontWeight: 400,
      "& fieldset": { borderColor: c.black.black500, "& legend": { width: "0.01px" } },
      "&.Mui-focused": {
        boxShadow: "0px 0px 0px 4px #D7DFF8",
        "& fieldset": { border: `1px solid ${c.primary.primary400} !important` },
        "&.Mui-error": {
          boxShadow: "none",
          "& fieldset": { border: `1px solid ${c.danger.danger800} !important` },
        },
      },
      "&.Mui-error fieldset": { border: `1px solid ${c.danger.danger800} !important` },
    },
    "& .MuiInputBase-input": {
      padding: 0,
      "&::placeholder": { color: c.black.black700, opacity: 1 },
      "&:-webkit-autofill": { WebkitBoxShadow: "0 0 0 100px #FFFFFF inset" },
    },
    "& .MuiInputLabel-root.MuiInputLabel-shrink": {
      transform: "translate(14px, -10px)",
      backgroundColor: "white",
      padding: "0 4px",
      fontSize: 14,
      fontWeight: 700,
      color: c.black.black800,
      "&.Mui-focused, &.Mui-error": { color: c.black.black800 },
    },
  };
  return (
    <MuiTextField
      ref={ref}
      variant="outlined"
      sx={[ourStyles, ...(Array.isArray(sx) ? sx : [sx])]}
      {...rest}
    />
  );
});

export default TextField;
```

`.types.ts`：

```ts
import type { TextFieldProps as MuiTextFieldProps } from "@mui/material/TextField";

export type TextFieldProps = Omit<MuiTextFieldProps, "variant"> & {
  width?: number | string;
  height?: number | string;
};
```

- [ ] story（`Inputs/TextField`：Default/Error/Disabled/Playground）+ mdx（簡介：表單文字輸入；時機：單行文字/select 模式；基本用法碼）＋匯出＋commit `feat(component): TextField（outlined + focus ring/error 態，沿用 v1）+ 手冊`

---

### Task 2: CheckBox

**Files:** Create `src/components/CheckBox.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`；Modify `src/index.ts`

**Interfaces:** `CheckBoxProps extends MuiCheckboxProps` + `label?`、`labelPlacement?`、`disableHover?`。

- [ ] 測試（勾選行為 + label）：

```tsx
test("點 label 勾選", async () => {
  const fn = vi.fn();
  r(<CheckBox label="同意條款" onChange={fn} />);
  const { default: userEvent } = await import("@testing-library/user-event");
  await userEvent.click(screen.getByText("同意條款"));
  expect(fn).toHaveBeenCalled();
});
```

- [ ] 實作：FormControlLabel + MuiCheckbox；icon/checkedIcon 用 `<Box component="span" sx={...}>`（v1 選擇器 `input:hover ~ &` 等原樣搬進 sx）；白勾 SVG 沿 v1；40×40、hover black300、disableFocusRipple/disableTouchRipple。sx 合併掛在 Checkbox root。
- [ ] story（`Inputs/CheckBox`）+ mdx + 匯出 + commit `feat(component): CheckBox（24px 方塊/品牌藍勾選/focus ring，沿用 v1）+ 手冊`

---

### Task 3: RadioButton

同 Task 2 模式（Radio、圓形 icon、白圓點 SVG）。story `Inputs/RadioButton`（含 RadioGroup 用法範例）。commit `feat(component): RadioButton（圓形/品牌藍選中，沿用 v1）+ 手冊`

---

### Task 4: Switch

**Files:** Create `src/components/Switch.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`；Modify `src/index.ts`

**Interfaces:** `SwitchProps extends MuiSwitchProps`。外層 div（focus ring 載體）接 ref；`$checked` 引用改 `.Mui-checked` 選擇器；checkedIcon 內藍勾 SVG 用 MUI `Fade` 包裝（200ms）。

- [ ] 測試（toggle 行為）：

```tsx
test("點擊切換 checked", async () => {
  const fn = vi.fn();
  r(<Switch onChange={fn} />);
  const { default: userEvent } = await import("@testing-library/user-event");
  await userEvent.click(screen.getByRole("switch"));
  expect(fn).toHaveBeenCalled();
});
```

- [ ] 實作要點：root 40×24/padding 0；switchBase padding 2、checked 位移 `translateX(16px)`；track/thumb/checked/disabled 樣式照規格摘要；全部收進單一 sx（`& .MuiSwitch-switchBase`、`& .MuiSwitch-track`、`&.Mui-checked + .MuiSwitch-track` 等選擇器）。
- [ ] story（`Inputs/Switch`：off/on/disabled）+ mdx + 匯出 + commit `feat(component): Switch（40×24 軌道/品牌藍選中/藍勾 thumb，沿用 v1）+ 手冊`

---

### Task 5: Select

**Files:** Create `src/components/Select.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`；Modify `src/index.ts`

**Interfaces:** props 沿 v1 `SelectProps`（value/onChange/placeholder/helperText/error/disabled/fullWidth/required/width/height/vertical/horizontal/open/placeholderStyle/selectStyle/helperTextStyle/onClick/transformOrigin/paddingTop/paddingLeft/dropdown/children/style…）+ 額外允許 `sx` 合併於 FormControl。內部組合 FormControl + InputLabel + MuiSelect(OutlinedInput) + FormHelperText。v9 修正：移除 `getContentAnchorEl`；`type`/`autoFocus` 傳入 inputProps。

- [ ] 測試（開啟選單選擇）：

```tsx
test("選擇選項觸發 onChange", async () => {
  const fn = vi.fn();
  r(
    <Select placeholder="類別" value="" onChange={fn}>
      <MenuItem value="a">A</MenuItem>
    </Select>,
  );
  const { default: userEvent } = await import("@testing-library/user-event");
  await userEvent.click(screen.getByRole("combobox"));
  await userEvent.click(await screen.findByText("A"));
  expect(fn).toHaveBeenCalled();
});
```

- [ ] 實作照 v1 結構翻譯（classes → sx；MenuProps.anchorOrigin 由 vertical/horizontal props；menu paper marginTop 8）。
- [ ] story（`Inputs/Select`：基本/含 helperText/error）+ mdx + 匯出 + commit `feat(component): Select（FormControl 組合/選單定位 props，沿用 v1）+ 手冊`

---

### Task 6: MenuItem（+ Menu 手冊註記）

**Files:** Create `src/components/MenuItem.tsx`、`.types.ts`、`.test.tsx`、`.stories.tsx`、`.mdx`；Modify `src/index.ts`

**Interfaces:** `MenuItemProps extends MuiMenuItemProps` + `width?`、`height?`、`hoverBackgroundColor?`、`hoverFontColor?`、`hoverIconColor?`、`rippleColor?`、`iconChildren?`。hover 預設 primary50/primary800。**Menu 不匯出**：MenuItem.mdx 的用法範例 `import Menu from "@mui/material/Menu"`，並註明「v1 的 Menu 為純轉發，v2 直接用原生」。

- [ ] 測試（渲染 + 點擊直通）＋實作（fontSize 14/700、focus unset、hover 三色可覆蓋、iconChildren 置尾 ListItemIcon justify-end）＋story（`Inputs/MenuItem`，搭配原生 Menu 展示）＋mdx＋匯出＋commit `feat(component): MenuItem（hover 品牌色/iconChildren，沿用 v1；Menu 改用原生）+ 手冊`

---

### Task 7: 整批驗證、Chrome MCP 驗收、push

- [ ] `npm run typecheck && npm test && npm run build && npm run storybook:build` 全綠（冷啟動誤報重跑）。
- [ ] 重啟 storybook；Chrome MCP 驗收：TextField focus ring/error 態、CheckBox/Radio 勾選視覺、Switch 切換動畫、Select 開單選擇、MenuItem hover 變色；無 console 錯誤。
- [ ] `git push origin v2` + CI 綠。

---

## 計劃完成的定義

- 6 個表單 wrapper 完成（Menu 依審計不匯出、手冊註明）；樣式/行為沿用 v1；全部含 story + 手冊 + 測試。
- 全鏈綠 + Chrome MCP 驗收 + CI 綠；整批一次 review。
- 下一步：計劃七（Tab/Tabs/TabPanel/SegmentedTab(s) + AutoComplete + Dropdown），A 類收尾。
